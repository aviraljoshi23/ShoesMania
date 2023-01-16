import mongoose, { model } from "mongoose";

const brandSchema   =  mongoose.Schema({
    brandName :{
        type:String,
        trim:true
    },
    brandImage :{
        type:String
    },
})

export const brand  =  mongoose.model("brand",brandSchema);