import { compare, hash } from "bcrypt";
import userModel from "../models/user.model";
import { LoginData, User } from "../types/users.types";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { log } from "util";

const saltRounds = 8;

export const userRegistrationService = async (userDetails: User) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userPassword = userDetails.passwordHash;
      const encryptedpassword = await hash(userPassword, 10);
      userDetails.passwordHash = encryptedpassword;
      const newUsersdata = new userModel(userDetails);
      const result = await newUsersdata.save();
      resolve({ message: "User registered successfully" });
    } catch (error: any) {
      if (error?.keyPattern && error?.keyPattern?.email) {
        reject({ message: "User already registered...!" });
      } else {
        reject({ message: "Unable to register the userasasas" });
      }
    }
  });
};

export const userLoginService = (loginData: LoginData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const foundUser = await userModel.find({ email: loginData.email });
      const userPassword = loginData.passwordHash;
      // const comparedResult = compare(userPassword, result);
      if (!foundUser) {
        reject("Authentication failed. User not found");
      }

      bcrypt.compare(userPassword, loginData.passwordHash, (err, result) =>{
        if(err || !result){
          reject("Authentication failed. Incorrect Password")
        }
      })
    } catch (error: any) {}
  });
};
