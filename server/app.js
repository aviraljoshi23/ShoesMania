import express from 'express';
import mongoose from "mongoose"
import path from 'path';
import { fileURLToPath } from "url";
import bodyParser from "body-parser"; 
import brandRoute from './routes/brand.route.js';
import cors from "cors";
import productRoute from './routes/product.route.js';
import userRoute from './routes/user.route.js';
import cartRoute from './routes/cart.route.js';

const app =  express();

app.set("view engine","ejs");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicPath = path.join(__dirname,'public');
app.use(express.static(publicPath));
app.use(cors());

mongoose.set("strictQuery",true);
mongoose.connect('mongodb://aviraljoshi23:rad72313@ac-2ixfqzf-shard-00-00.bsvezu6.mongodb.net:27017,ac-2ixfqzf-shard-00-01.bsvezu6.mongodb.net:27017,ac-2ixfqzf-shard-00-02.bsvezu6.mongodb.net:27017/?ssl=true&replicaSet=atlas-14mss2-shard-0&authSource=admin&retryWrites=true&w=majority',err=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Aviral is connected to Atlas");
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended:true}));
        app.use("/brand",brandRoute);
        app.use("/product",productRoute);
        app.use("/user",userRoute);
        app.use("/cart",cartRoute);
        app.listen(3000,(req,res)=>{
            console.log(`listening on http://localhost:${3000}`);
        })
    }
})