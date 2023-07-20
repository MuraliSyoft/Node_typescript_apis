import { Products } from "../../types/users.types";
import productModel from "../../models/productModel/product.model";


export const addProductService = async (productDetails: Products) => {
  return new Promise(async (resolve, reject) => {
    try {
      const produtData = new productModel(productDetails);
      const result = await produtData.save();
      resolve({ result: result, message: "Product saved successfully" });
    } catch (error: any) {
      reject({ message: "Product already existsss...!" });
    }
  });
};


export const getProductService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await productModel.find();
      resolve({ products: result });
    } catch (error: any) {
      reject({ message: "Unable to fetch the data" });
    }
  });
};



export const getProductByIdService = (productId: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await productModel.findOne({ _id: productId });
      resolve({ products: result });
    } catch (error: any) {
      reject({ message: "Unable to fetch the data" });
    }
  });
};
