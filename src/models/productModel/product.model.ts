import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    default: "No description provided",
  },
  productPrice: {
    type: String,
  },
  productImageUrl: {
    type: Array<string>,
  },
  productBrand: {
    type: String,
  },
  productCategory: {
    type: String,
  },
});

export default mongoose.model("Product", productSchema);
