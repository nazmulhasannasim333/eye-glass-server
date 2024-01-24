import { z } from "zod";

const createStudentValidationSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export const UserZodValidations = {
  createStudentValidationSchema,
};
