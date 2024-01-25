/* eslint-disable no-unused-vars */

import { UserServices } from "./user.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createUser = catchAsync(async (req, res) => {
  const newUser = req.body;
  const result = await UserServices.createUserIntoDB(newUser);
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User created successfully",
    data: result,
  });
});

const loginUser = catchAsync(async (req, res) => {
  const result = await UserServices.loginUser(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User login successfully",
    data: {
      accessToken: result,
    },
  });
});

export const UserController = { createUser, loginUser };
