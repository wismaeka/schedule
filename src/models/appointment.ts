import mongoose, { Document, Schema } from "mongoose";

export interface IAppointment extends Document {
  email: string;
  date: Date;
  slot: number;
  status: string;
}

const AppointmentSchema: Schema = new Schema({
  email: { type: String, required: true },
  date: { type: Date, required: true },
  slot: { type: Number, required: true, min: 0, max: 1 },
  status: { type: String, required: true },
});

export default mongoose.model<IAppointment>("Appointment", AppointmentSchema);
