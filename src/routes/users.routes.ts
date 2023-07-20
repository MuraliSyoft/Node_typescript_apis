import express from "express";
import userController from "../controllers/users.controller";

const userRoutes = express.Router();

userRoutes.post("/register", userController.userRegistrationController);
userRoutes.post("/login", userController.userLoginController);

export default userRoutes;
