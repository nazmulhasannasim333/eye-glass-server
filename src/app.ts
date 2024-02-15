import express, { Application, Request, Response } from "express";
import cors from "cors";
import config from "./app/config";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFount from "./app/middlewares/notFount";
import router from "./app/router";
const app: Application = express();

// parsers
app.use(express.json());
app.use(
  cors({
    origin: ["https://eye-glass-inventory.vercel.app/"],
    credentials: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send(`Server Running on port ${config.port}`);
});

app.use("/api", router);

// global error handler middleware
app.use(globalErrorHandler);

// not found middleware
app.use(notFount);

export default app;
