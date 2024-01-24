import { z } from "zod";

const createStudentValidationSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

const loginValidationSchema = z.object({
  email: z.string({ required_error: "Email is required." }),
  password: z.string({ required_error: "Password is required" }),
});

export const UserZodValidations = {
  createStudentValidationSchema,
  loginValidationSchema,
};
