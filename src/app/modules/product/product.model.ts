import { TEyeglasses } from "./product.interface";
import { Schema } from "mongoose";
import { model } from "mongoose";

const eyeglassesSchema = new Schema<TEyeglasses>(
  {
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    productQuantity: {
      type: Number,
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },
    frameMaterial: {
      type: String,
      required: true,
    },
    frameShape: {
      type: String,
      required: true,
    },
    lensType: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    userEmail: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Eyeglass = model<TEyeglasses>("Eyeglass", eyeglassesSchema);
