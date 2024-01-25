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
router.get("/get-all-sales", SalesControllers.getAllSales);

export const SalesRoutes = router;
