import { NextFunction, Request, Response } from "express";

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const notFount = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "API route not found",
  });
};

export default notFount;
