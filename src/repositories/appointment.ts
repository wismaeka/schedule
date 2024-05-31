import Appointment, { IAppointment } from "../models/appointment";
class AppointmentRepository {
  async create(appointment: IAppointment): Promise<IAppointment> {
    return Appointment.create(appointment);
  }

  async findByDateAndSlot(
    date: Date,
    slot: number
  ): Promise<IAppointment | null> {
    return Appointment.findOne({ date, slot }).exec();
  }
  async findByDate(date: Date): Promise<IAppointment[]> {
    return Appointment.find({ date }).exec();
  }

  async findAll(): Promise<IAppointment[]> {
    return Appointment.find().exec();
  }

  async deleteById(id: string): Promise<IAppointment | null> {
    return Appointment.findByIdAndDelete(id).exec();
  }
  async findAndUpdate(
    id: string,
    status: string,
    slot: number
  ): Promise<IAppointment | null> {
    return await Appointment.findByIdAndUpdate(
      { _id: id },
      {
        status,
        slot,
      }
    ).exec();
  }
}

export default new AppointmentRepository();
