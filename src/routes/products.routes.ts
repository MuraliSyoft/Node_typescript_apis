import express from "express";
import productController from "../controllers/productController/product.controller";

const productRoutes = express.Router();
productRoutes.post("/addProduct", productController.addProductController);
productRoutes.get("/getAllProducts", productController.getProductController);
productRoutes.get("/:productId", productController.getProductByIdController);

export default productRoutes;
