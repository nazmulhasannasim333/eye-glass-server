import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { SalesZodValidations } from "./sales.validation";
import { SalesControllers } from "./sales.controller";

const router = express.Router();

router.post(
  "/create-sales",
  validateRequest(SalesZodValidations.createSalesValidationSchema),
  SalesControllers.createSales
);
router.get("/get-all-sales/:email/:role", SalesControllers.getAllSales);
router.get("/get-sale/:id", SalesControllers.getSingleSale);

export const SalesRoutes = router;
