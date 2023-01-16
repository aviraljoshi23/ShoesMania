import express from "express";
import { signUp } from "../controller/user.controller.js";

const userRoute  = express.Router();

userRoute.post("/signup",signUp);

export default userRoute;