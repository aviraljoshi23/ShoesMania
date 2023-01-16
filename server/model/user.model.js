import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userEmail:{
         type:String,
         required: true,
         trim: true
    },
    userPassword:{
        type:String,
        trim:true,
        required:true
    }
})

export const  userModel =  mongoose.model('user',userSchema);