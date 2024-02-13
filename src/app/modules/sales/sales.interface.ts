import { Types } from "mongoose";

export interface TSales {
  productId: Types.ObjectId;
  quantity: number;
  buyerName: string;
  userEmail: string;
}
