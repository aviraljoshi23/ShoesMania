import { brand } from "../model/brand.model.js";

export const save = async(req,res,next)=>{
    try{
        console.log(req.body);
        req.body.brandImage =  req.file.filename;
        const data  = await brand.create(req.body);
       return res.json({status:true,data,message:"Brand Added"});
    }
    catch(error){
        console.log(error);
    }
}
export const list  = async(req,res,next)=>{
    brand.find().then(result=>{
        res.json({status:true,data:result})
    })
    .catch(err=>{
        console.log(err);
    })
}
export const remove = async(req,res,next)=>{
    try{
        await brand.deleteMany({categoryId:req.params.id})
        const data = await brand.deleteOne({_id:req.params.id});
        res.json({status:true,mess:"Deleted Successfullyy"});
    }
    catch(err){
        console.log(err);
    }
}
export const update = async (req,res,next)=>{
    try {
         await brand.updateOne({_id:req.body._id},{$set:{brandName:req.body.brandName,brandImage:req.body.brandImage}})
         return res.status(200).json({mess:"Brand Updated successfully...",status:true})
    } catch (error) {
        console.log(error);
        return res.status(500).json({mess:"Internal server error...",status:false})
    }
}