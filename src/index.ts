import express from "express";
import bodyParser from "body-parser";
import { config as dotenv } from "dotenv";
import mongoose, { mongo } from "mongoose";
import appointmentRoutes from "./api/router/router";
import { errorHandler } from "./middleware/errorHandler";

dotenv();
const app = express();
const PORT = process.env.PORT || 3000;

// DB
mongoose.connect("mongodb://localhost:27018/scheduleDB");

app.use(bodyParser.json());

app.use("/api/appointments", appointmentRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
