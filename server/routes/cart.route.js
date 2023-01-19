import express from "express";
import { addToCart, loadCart, removeItem } from "../controller/cart.controller.js";

const cartRoute = express.Router();

cartRoute.post("/addToCart",addToCart);
cartRoute.post("/cart-list",loadCart);
cartRoute.post("/removeItem",removeItem);

export default cartRoute;