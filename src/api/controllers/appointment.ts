import { NextFunction, Request, Response } from "express";
import appointmentService from "../../services/appointment";
import { generateDate, generateTime } from "../../helper/date";

class AppointmentController {
  async getAvailableSlotbyDate(req: Request, res: Response): Promise<void> {
    let date = req.query.date as string;
    try {
      const appointments = await appointmentService.getAvailableSlotByDate(
        date
      );
      const resp = appointments.map((x) => {
        return {
          date: generateDate(x.date),
          time: generateTime(x.date),
          available_slots: x.status === "BOOKED" ? 0 : 1,
        };
      });
      res.status(200).json(resp);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async createAppointment(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const appointmentBody = req.body;
    try {
      const appointment = await appointmentService.createAppointment(
        appointmentBody
      );
      const resp = {
        date: generateDate(appointment.date),
        time: generateTime(appointment.date),
        status: appointment.status,
      };

      res.status(201).json(resp);
    } catch (err) {
      next(err);
    }
  }

  async cancelAppointment(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    try {
      const appointment = await appointmentService.cancelAppointment(id);
      if (!appointment) {
        const err = new Error("Appointmnet not found");
        err.name = "NOT_FOUND";
        throw err;
      } else {
        res.status(200).json({ message: "Appointment cancelled" });
      }
    } catch (error) {
      next(error);
    }
  }
}

export default new AppointmentController();
