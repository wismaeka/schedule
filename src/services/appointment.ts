import { IAppointment } from "../models/appointment";
import AppointmentRepository from "../repositories/appointment";

class AppointmentService {
  async createAppointment(
    appointmentData: IAppointment
  ): Promise<IAppointment> {
    const { date, slot } = appointmentData;
    const existingAppointment = await AppointmentRepository.findByDateAndSlot(
      date,
      slot
    );

    if (existingAppointment && existingAppointment.status === "BOOKED") {
      const err = new Error("Slot already booked");
      err.name = "SLOT_BOOKED";
      throw err;
    }

    return AppointmentRepository.create({
      ...appointmentData,
      status: "BOOKED",
    } as IAppointment);
  }

  async getAvailableSlotByDate(date: string): Promise<IAppointment[]> {
    return AppointmentRepository.findByDate(new Date(date));
  }
  async cancelAppointment(id: string): Promise<IAppointment | null> {
    return AppointmentRepository.findAndUpdate(id, "AVAILABLE", 1);
  }
}

export default new AppointmentService();
