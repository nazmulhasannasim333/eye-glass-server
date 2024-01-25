import { TSales } from "./sales.interface";
import { Sales } from "./sales.model";

const createSalesIntoDB = async (payload: TSales) => {
  const result = await Sales.create(payload);
  return result;
};

const getAllSalesIntoDB = async () => {
  const result = await Sales.find().populate("productId");
  return result;
};

export const SalesServices = { createSalesIntoDB, getAllSalesIntoDB };
