import { foodItems } from "../model/food.modal.js"
import { hotelModel } from "../model/hotel.modal.js"
import { cartModel } from "../model/cart.model.js"


export const loadData = async (request,response,next)=>{
    let currentUserId = request.session.currentUserId;
    let cartItems = await cartModel.findOne({userId: currentUserId})
    let cartItemList = [];
    for(let index=0; index<cartItems.foodList.length; index++){
        let item = cartItems.foodList[index].toJSON();
        item.qty = 1;
        cartItemList.push(item);
    }
    return response.status(200).json({itemList: cartItemList});
}

export const cartItem = async (request,response,next)=>{
    let currentUserId = request.session.currentUserId;
    let cartItems = await cartModel.findOne({userId: currentUserId})
    let hotelList = await hotelModel.find();
    
    return response.render("user/user-cart.ejs",{
         currentUser: request.session,
         cartItemList: cartItems.foodList,
         hotelList: hotelList        
    });
}

export const addToCart =  async(req,res,next)=>{
    let foodDetails =  await foodItems.findById(req.params.foodId);
    let currentUserId =  req.session.currentUserId;
    let user = await cartModel.findOne({userId:currentUserId});
    console.log(user);
    if(user){
        let index =  0;
        for(;index<user.foodList.length;index++){
            console.log(user.foodList[index].foodId);
            if(user.foodList[index].foodId == req.params.foodId){
                console.log("Already Exist");
                return res.status(200).json({message:"Already Added"});
            }
        }
        if(index == user.foodList.length){
            user.foodList.push({
                foodId : foodDetails._id,
                foodName:foodDetails.foodName,
                foodImage:foodDetails.foodImage,
                foodPrice:foodDetails.foodPrice
            });
            console.log(user);
            console.log("Food Added In Cart");
            let  status = await cartModel.create(user);
            return res.status(200).json({message:'Food Added To Cart'});
        }
    }
    else{
        let result =  await cartModel.create({
            userId:currentUserId,
            foodList:[{
                foodId:req.params.foodId,
                foodName:foodDetails.foodName,
                foodPrice:foodDetails.foodPrice,
                foodImage:foodDetails.foodImage,
            }]
        })
        let status =  await cartModel.create(user);
        return res.status(200).json({message:"Added In cart"});
    }

}

// export const remove = async(req,res,next)=>{
//     let hotelList = await hotelModel.find();
//     cartModel.updateOne({ userId:req.session.currentUserId},{
//         $pull:{foodList:{foodId:req.params.foodId}}})
//         .then(result=>{
//             console.log("Removed");
//             let cartItems = cartModel.findOne({userId: currentUserId})
//             let cartItemList = [];
//             for(let index=0; index<cartItems.foodList.length; index++){
//                 let item = cartItems.foodList[index].toJSON();
//                 item.qty = 1;
//                 cartItemList.push(item);
//             }
//            return  res.render("user/user-cart.ejs",{cartItemList: result.foodList,currentUser:req.session,hotelList:hotelList});
//         }).catch(err=>{
//             console.log(err);
//         })
// }