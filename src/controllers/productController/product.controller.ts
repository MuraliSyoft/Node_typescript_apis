import express, { Request, Response } from "express";
import { Product } from "../../types/products.types";
import {
  addProductService,
  getProductByIdService,
  getProductService,
} from "../../services/productService/product.service";

const addProductController = async (req: Request, res: Response) => {
  const productDetails = { ...req.body };
  if (Object.keys(productDetails).length === 0) {
    res.status(400).send("Product details required");
  }
  if (!productDetails.productName) {
    res.status(400).send("Product name required");
  }
  if (!productDetails.productDescription) {
    res.status(400).send("Product description required");
  } else {
    try {
      const result = await addProductService(productDetails);
      res.status(200).send(result);
      console.log("r======>", result);
    } catch (error) {
      res.status(500).send(error);
    }
  }
};

const getProductController = async (req: Request, res: Response) => {
  try {
    const result = await getProductService();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getProductByIdController = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  try {
    const result = await getProductByIdService(productId);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

const productController = {
  addProductController: addProductController,
  getProductController: getProductController,
  getProductByIdController: getProductByIdController,
};

export default productController;
