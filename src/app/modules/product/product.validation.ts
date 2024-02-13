import { z } from "zod";

export const createEyeglassesSchema = z.object({
  productName: z.string(),
  productPrice: z.number(),
  productQuantity: z.number(),
  productImage: z.string(),
  frameMaterial: z.string(),
  frameShape: z.string(),
  lensType: z.string(),
  brand: z.string(),
  gender: z.enum(["Male", "Female"]),
  color: z.string(),
  userEmail: z.string(),
});

export const ProductValidation = {
  createEyeglassesSchema,
};
