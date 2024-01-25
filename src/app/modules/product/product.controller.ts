import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import { EyeGlassServices } from "./product.service";
import catchAsync from "../../utils/catchAsync";

const createProduct = catchAsync(async (req, res) => {
  const newUser = req.body;
  const result = await EyeGlassServices.createProductIntoDB(newUser);
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product Added successfully",
    data: result,
  });
});

const getAllProduct = catchAsync(async (req, res) => {
  const result = await EyeGlassServices.getAllProductIntoDB();
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Products retrieved successfully",
    data: result,
  });
});

const deleteProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await EyeGlassServices.deleteProductIntoDB(id);
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Products deleted successfully",
    data: result,
  });
});

const updateProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const newProduct = req.body;
  const result = await EyeGlassServices.updateProductIntoDB(id, newProduct);
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Products Updated successfully",
    data: result,
  });
});

export const ProductController = {
  createProduct,
  getAllProduct,
  deleteProduct,
  updateProduct,
};
