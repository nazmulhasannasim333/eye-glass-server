import express, { Application, Request, Response } from "express";
import cors from "cors";
import config from "./app/config";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFount from "./app/middlewares/notFount";
import router from "./app/router";
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));

app.get("/", (req: Request, res: Response) => {
  res.send(`Server Running on port ${config.port}`);
});

app.use("/api", router);

// global error handler middleware
app.use(globalErrorHandler);
// app.use((err, req, res, next) => {
//   res.status(500).json({
//     success: false,
//     message: "something went wrong",
//   });
// });

// not found middleware
app.use(notFount);

export default app;
