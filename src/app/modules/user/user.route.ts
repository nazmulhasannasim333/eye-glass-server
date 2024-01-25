import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { UserZodValidations } from "./user.validation";
import { UserController } from "./user.controller";

const router = express.Router();

router.post(
  "/create-user",
  validateRequest(UserZodValidations.createUserValidationSchema),
  UserController.createUser
);

router.post(
  "/login-user",
  validateRequest(UserZodValidations.loginValidationSchema),
  UserController.loginUser
);

export const UserRoutes = router;
