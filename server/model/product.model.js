import mongoose from "mongoose";

const productSchema   =  mongoose.Schema({
    brandId :{
        type:mongoose.Schema.ObjectId,
        ref:"brand"
    },
    productName :{
        type:String,
        trim:true
    },
    productPrice :{
        type:Number,
        trim:true
    },
    productDescription :{
        type:String,
        trim:true
    },
    productImage :{
        type:[]
    },
    productPreviousPrice :{
        type:Number,
        trim:true
    },
    productSize :{
        type:[],
    },
    productColor :{
        type:String,
        trim:true
    },
    productMaterial :{
        type:String,
        trim:true
    },
    productQty :{
        type:Number,
    },
    productSoldCount :{
        type:Number,
    }
});
export const product  =  mongoose.model("product",productSchema);