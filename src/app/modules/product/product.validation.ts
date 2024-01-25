import { z } from "zod";

export const createEyeglassesSchema = z.object({
  productName: z.string(),
  productPrice: z.number(),
  productQuantity: z.number(),
  frameMaterial: z.string(),
  frameShape: z.string(),
  lensType: z.string(),
  brand: z.string(),
  gender: z.string(),
  color: z.string(),
});

export const ProductValidation = {
  createEyeglassesSchema,
};
