import express from "express";
import multer from "multer";
import { list, remove, save } from "../controller/product.controller.js";

const productRoute =  express.Router();

const upload =  multer({dest:"public/ShoesImages"})
productRoute.get("/list",list);
productRoute.get("/delete/:id",remove);
productRoute.post("/save",upload.array("productImage"),save);

export default productRoute;