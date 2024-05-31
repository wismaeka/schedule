import { Request, Response, NextFunction } from "express";

export function checkApiKey(req: Request, res: Response, next: NextFunction) {
  try {
    const { api_key } = req.headers;
    if (api_key !== process.env.API_KEY) {
      return res.status(403).json({
        message: "Forbiden Access",
        status: 403,
      });
    }
    next();
  } catch (err: any) {
    return res.status(500).json({
      error: err.message,
    });
  }
}
