import express from "express";
import { signin, signUp } from "../controller/user.controller.js";

const userRoute  = express.Router();

userRoute.post("/signup",signUp);
userRoute.post("/signin",signin);


export default userRoute;