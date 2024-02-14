import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import { SalesServices } from "./sales.service";
import catchAsync from "../../utils/catchAsync";

const createSales = catchAsync(async (req, res) => {
  const newSales = req.body;
  const result = await SalesServices.createSalesIntoDB(newSales);
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Sales created successfully",
    data: result,
  });
});

const getAllSales = catchAsync(async (req, res) => {
  const { email, role } = req.params;
  const result = await SalesServices.getAllSalesIntoDB(req.query, email, role);
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Sales retrieved successfully",
    data: result,
  });
});

const getSingleSale = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SalesServices.getSingleSaleIntoDB(id);
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Sale is retrieved successfully",
    data: result,
  });
});

export const SalesControllers = { createSales, getAllSales, getSingleSale };
