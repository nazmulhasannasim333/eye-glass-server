import { z } from "zod";

const createSalesValidationSchema = z.object({
  productId: z.string(),
  quantity: z.number(),
  buyerName: z.string(),
  userEmail: z.string(),
});

export const SalesZodValidations = {
  createSalesValidationSchema,
};
