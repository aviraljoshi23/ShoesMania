import express from "express";
import { addToCart, cartItem } from "../controller/cart.controller";

const cartRoute = express.Router();

cartRoute.post("/addToCart",addToCart);
cartRoute.post("/cartList",cartItem);

export default cartRoute;