import express, { Request, Response } from "express";
import "./config/db";
import userRoutes from "./routes/users.routes";
import productRoutes from "./routes/products.routes";

const app = express();
const port = 3001;
const API_VERSION = "/api/v1";

app.use(express.json());

app.use(API_VERSION + "/user", userRoutes);
app.use(API_VERSION + "/products", productRoutes);

app.listen(port, () => {
  console.log("Server is running 8080");
});
