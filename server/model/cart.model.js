import mongoose from  "mongoose";

const cartSchema =  mongoose.Schema({
    userId :{
        type : mongoose.Schema.ObjectId,
        ref:"user"
    },
    productList:[]
});

export const  cartModel =  mongoose.model('cart',cartSchema);