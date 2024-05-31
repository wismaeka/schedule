import { Request, Response, NextFunction } from "express";
export function errorHandler(
  err: { name: string; errors: Array<{ message: string }>; message: string },
  req: Request,
  res: Response,
  next: NextFunction
) {
  let message;
  let status;
  switch (err.name) {
    case "SLOT_BOOKED":
      status = 409;
      message = err.message;
      break;
    case "NOT_FOUND":
      status = 404;
      message = err.message;
      break;
    default:
      status = 500;
      message = err.message || "Internal Server Error";
  }

  res.status(status).json({ error: message });
}
