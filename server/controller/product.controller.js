import { product } from "../model/product.model.js";

export const list  = async(req,res,next)=>{
    product.find({}).populate({path:'brandId'}).then(result=>{
        res.json({status:true,data:result})
    })
    .catch(err=>{
        console.log(err);
    })
}
export const remove = async(req,res,next)=>{
    try{
        const data = await product.deleteOne({_id:req.params.id});
        res.json({status:true,mess:"Deleted Successfullyy"});
    }
    catch(err){
        console.log(err);
    }
}

export const save =  async(req,res,next)=>{
    try{
        let arr = [];
        for(let i = 0;i<req.files.length;i++){
            arr.push(req.files[i].filename);
        }
        req.body.productImage = arr;
        console.log(req.body);
        const data = await product.create(req.body);
        res.json({status:true,message:"Product Added Successfully"});
    }
    catch(error){
        console.log(error);
    }
}