import QueryBuilder from "../../builder/QueryBuilder";
import { TEyeglasses } from "./product.interface";
import { Eyeglass } from "./product.model";

const createProductIntoDB = async (payload: TEyeglasses) => {
  const result = await Eyeglass.create(payload);
  return result;
};

const getAllProductIntoDB = async (query: Record<string, unknown>) => {
  // const minPrice = query.minPrice as number;
  // const maxPrice = query.maxPrice as number;

  // console.log({ minPrice, maxPrice });
  const productQuery = new QueryBuilder(Eyeglass.find(), query).filter();
  // .filterByPriceRange(minPrice, maxPrice);
  const result = await productQuery.modelQuery;
  return result;
};

// const getAllProductIntoDB = async (query: Record<string, unknown>) => {
//   const {
//     minPrice,
//     maxPrice,
//     productName,
//     productPrice,
//     productQuantity,
//     frameMaterial,
//     frameShape,
//     lensType,
//     brand,
//     gender,
//     color,
//   } = query;

//   const filters: Record<string, any> = {};

//   console.log({ minPrice, maxPrice });

//   // Apply filters
//   if (minPrice !== undefined || maxPrice !== undefined) {
//     filters.productPrice = {};
//     if (minPrice !== undefined) filters.productPrice.$gte = minPrice;
//     if (maxPrice !== undefined) filters.productPrice.$lte = maxPrice;
//   }

//   if (frameMaterial) filters.frameMaterial = frameMaterial;
//   if (frameShape) filters.frameShape = frameShape;
//   if (lensType) filters.lensType = lensType;
//   if (brand) filters.brand = brand;
//   if (gender) filters.gender = gender;
//   if (color) filters.color = color;
//   const result = await Eyeglass.find(filters);
//   return result;
// };

const deleteProductIntoDB = async (id: string) => {
  const result = await Eyeglass.findByIdAndDelete(id);
  return result;
};
const updateProductIntoDB = async (
  id: string,
  payload: Partial<TEyeglasses>
) => {
  const result = await Eyeglass.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const EyeGlassServices = {
  createProductIntoDB,
  getAllProductIntoDB,
  deleteProductIntoDB,
  updateProductIntoDB,
};
