import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { Eyeglass } from "../product/product.model";
import { TSales } from "./sales.interface";
import { Sales } from "./sales.model";
import { User } from "../user/user.model";

const createSalesIntoDB = async (payload: TSales) => {
  const { productId, quantity } = payload;
  const userEmail = payload.userEmail;
  const userExist = await User.findOne({ email: userEmail });
  if (!userExist) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }

  const result = await Eyeglass.findOneAndUpdate(
    { _id: productId, productQuantity: { $gte: quantity } },
    { $inc: { productQuantity: -quantity } },
    { new: true }
  );

  if (result) {
    if (result.productQuantity === 0) {
      await Eyeglass.deleteOne({ _id: productId });
    }
    const salesResult = await Sales.create(payload);
    return salesResult;
  } else {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Insufficient quantity or glass not found"
    );
  }
};

const getAllSalesIntoDB = async (
  query: Record<string, unknown>,
  email: string,
  role: string
) => {
  const { filterBy } = query;

  let dateFilter: Record<string, unknown> = {};

  if (filterBy) {
    const currentDate = new Date();

    switch (filterBy) {
      case "daily":
        dateFilter = {
          createdAt: {
            $gte: new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              currentDate.getDate()
            ),
            $lt: new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              currentDate.getDate() + 1
            ),
          },
        };
        break;
      case "weekly":
        dateFilter = {
          createdAt: {
            $gte: new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              currentDate.getDate() - currentDate.getDay()
            ),
            $lt: new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              currentDate.getDate() + (6 - currentDate.getDay()) + 1
            ),
          },
        };
        break;
      case "monthly":
        dateFilter = {
          createdAt: {
            $gte: new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              1
            ),
            $lt: new Date(
              currentDate.getFullYear(),
              currentDate.getMonth() + 1,
              1
            ),
          },
        };
        break;
      case "yearly":
        dateFilter = {
          createdAt: {
            $gte: new Date(currentDate.getFullYear(), 0, 1),
            $lt: new Date(currentDate.getFullYear() + 1, 0, 1),
          },
        };
        break;
      default:
        dateFilter = {
          createdAt: {
            $gte: new Date(currentDate.getFullYear(), 0, 1),
            $lt: new Date(currentDate.getFullYear() + 1, 0, 1),
          },
        };
        break;
    }
  }

  let result;

  if (role === "manager") {
    result = await Sales.find(dateFilter).populate("productId");
  } else if (role === "user") {
    result = await Sales.find({ userEmail: email, ...dateFilter }).populate(
      "productId"
    );
  } else {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid user role");
  }

  return result;
};

const getSingleSaleIntoDB = async (id: string) => {
  const result = Sales.findById(id).populate("productId");
  return result;
};

export const SalesServices = {
  createSalesIntoDB,
  getAllSalesIntoDB,
  getSingleSaleIntoDB,
};
