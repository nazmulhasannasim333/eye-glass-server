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
    price: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Eyeglass = model<TEyeglasses>("Eyeglass", eyeglassesSchema);
