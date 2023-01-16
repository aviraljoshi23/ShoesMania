import express from "express";
import { list, remove, save, update } from "../controller/brand.controller.js";
import multer from "multer";
const brandRoute =  express.Router();

const upload =  multer({dest:"public/BrandImages"})

brandRoute.get("/list",list);
brandRoute.post("/save",upload.single("brandImage"),save);
brandRoute.get("/delete/:id",remove);
brandRoute.post("/update/:id",update);


export default brandRoute;