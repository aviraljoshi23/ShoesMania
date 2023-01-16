import { userModel } from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const signUp  =  async(req,res,next)=>{
  let saltKey =  await bcrypt.genSalt(10);
  let encryptedPassword = await bcrypt.hash(req.body.userPassword,saltKey);
  console.log(req.body);
    await userModel.create( {
      userEmail:req.body.userEmail,
      userPassword:encryptedPassword
    }).then(result=>{
       return  res.status(200).json({status:true,message:"Account Created"})
    }).catch(err=>{
        res.status(500).json({message:"Error Occured",status:false})
    })
}
