import { Schema, model } from "mongoose";
import { TSales } from "./sales.interface";

const salesSchema = new Schema<TSales>(
  {
    productId: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: "Eyeglass",
    },
    quantity: { type: Number, required: true },
    buyerName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Sales = model<TSales>("Sale", salesSchema);
