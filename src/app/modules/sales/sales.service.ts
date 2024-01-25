import { TSales } from "./sales.interface";
import { Sales } from "./sales.model";

const createSalesIntoDB = async (payload: TSales) => {
  const result = await Sales.create(payload);
  return result;
};

// const getAllSalesIntoDB = async (query: Record<string, unknown>) => {
//   console.log(query);
//   const {weekly, daily, monthly, yearly} = query

//   if(daily){

//   }else if(weekly){

//   }
//   const result = await Sales.find().populate("productId");
//   return result;
// };

const getAllSalesIntoDB = async (query: Record<string, unknown>) => {
  const { filterBy } = query;

  let dateFilter: Record<string, unknown> = {};

  // Check the filterBy query parameter
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
        // Handle invalid filterBy values or no filterBy parameter
        break;
    }
  }

  const result = await Sales.find(dateFilter).populate("productId");
  return result;
};

export const SalesServices = { createSalesIntoDB, getAllSalesIntoDB };
