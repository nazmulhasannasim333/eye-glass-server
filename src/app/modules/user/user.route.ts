import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { UserZodValidations } from "./user.validation";
import { UserController } from "./user.controller";

const router = express.Router();

router.post(
  "/create-user",
  validateRequest(UserZodValidations.createStudentValidationSchema),
  UserController.createUser
);

export const UserRoutes = router;
