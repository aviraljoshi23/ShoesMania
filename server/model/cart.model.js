import mongoose from "mongoose";

const cartSchema =  mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref :'user'
    },
    foodList:[
        {
            foodId:mongoose.Schema.ObjectId,
            foodName:String,
            foodPrice:Number,
            foodImage:String
        }
    ]
})

export const cartModel =  mongoose.model("cart",cartSchema);
