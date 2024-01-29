import QueryBuilder from "../../builder/QueryBuilder";
import { TEyeglasses } from "./product.interface";
import { Eyeglass } from "./product.model";

const createProductIntoDB = async (payload: TEyeglasses) => {
  const result = await Eyeglass.create(payload);
  return result;
};

const getAllProductIntoDB = async (query: Record<string, unknown>) => {
  const minPrice = query.minPrice as number;
  const maxPrice = query.maxPrice as number;
  const ProductSearchableFields = [
    "productName",
    "color",
    "lensType",
    "brand",
    "gender",
    "frameMaterial",
    "frameShape",
    "frameMaterial",
  ];
  const productQuery = new QueryBuilder(Eyeglass.find(), query)
    .search(ProductSearchableFields)
    .filter()
    .filterByPriceRange(minPrice, maxPrice)
    .paginate();
  const result = await productQuery.modelQuery;
  return result;
};

const getSingleProductIntoDB = async (id: string) => {
  const result = await Eyeglass.findById(id);
  return result;
};

const deleteProductIntoDB = async (id: string) => {
  const result = await Eyeglass.findByIdAndDelete(id);
  return result;
};

const deleteManyProductsIntoDB = async (ids: string[]) => {
  const filter = { _id: { $in: ids } };
  const result = await Eyeglass.deleteMany(filter);
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
  getSingleProductIntoDB,
  deleteProductIntoDB,
  deleteManyProductsIntoDB,
  updateProductIntoDB,
};
