import { z } from "zod";

export const createEyeglassesSchema = z.object({
  productName: z.string(),
  productPrice: z.number(),
  productQuantity: z.number(),
  frameMaterial: z.string(),
  frameShape: z.string(),
  lensType: z.string(),
  brand: z.string(),
  price: z.number(),
  gender: z.string(),
  color: z.string(),
});

export const ProductValidation = {
  createEyeglassesSchema,
};
