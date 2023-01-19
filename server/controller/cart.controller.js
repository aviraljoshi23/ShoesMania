import { cartModel } from "../model/cart.model.js";


// export const addToCart = async(req,res,next)=>{
//     console.log(req.body);

//     if(req.body){
//         return res.status(200).json({message:"Added To Cart",status:true})
//     }
// }
export const addToCart = async(req,res,next)=>{
    console.log(req.body);
    let cart = await cartModel.findOne({userId:req.body.userId});
    if(cart){
        cart.productList.push(req.body.productItems);;
        cart.save().then(result=>{
            return res.status(200).json({message:"Item added to  cart",status:true});  
        }).catch(err=>{
            return  res.status(500).json({message:"Internal Server Error",status:false})
        })
    }
    else{
        cartModel.create({
             userId:req.body.userId,
             productList:req.body.productItems
        }).then(result=>{
            return res.status(200).json({message:"Item Added  to cart",status:true});
        }).catch(err=>{
            return res.status(500).json({message:"Internal Server Error",status:false});
        })
    }
}

export const loadCart = async (req,res,next)=>{
    console.log(req.body.userId);
    let cartItems = await cartModel.findOne({userId: req.body.userId});
    console.log(cartItems);
    let cartItemList = [];
    if(cartItems==null){
        return res.status(200).json({productList:[]});
    }
    else{
        for(let index=0; index<cartItems.productList.length; index++){
            let item = cartItems.productList[index];
            item.qty = 1;
            cartItemList.push(item);
        }
        return  res.status(200).json({productList: cartItemList});
    }
}

// export const removeItem  = async(req,res,next)=>{
//     console.log(req.body.userId);
//     console.log(req.body.index);

//     let data =  await cartModel.findOne({userId:req.body.userId},function(r))
// }

export const removeItem = (req,res,next)=>{
    cartModel.updateOne({userId : req.body.userId},
        { $pull: { productList : {_id: req.body.product._id}}}
        ).then(result=>{
            return res.status(200).json({message:"Item Removed From Cart",status:true});  
        }).catch(err=>{
            return res.status(500).json({message:"Internal Server Error",status:false});
        })
};