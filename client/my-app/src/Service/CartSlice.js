import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import WebApi from "../WebWork/WebApi";
import WebService from "../WebWork/webService";


export const fetchCart = createAsyncThunk("cart/fetchCart",async(userId)=>{
     let response = await WebService.postApi(WebApi.LOAD_CART,{userId:userId});
     console.log("Cart Slice");
     console.log(response.data.productList);
     return response.data.productList;
});

const slice = createSlice({
    name:"cart",
    initialState:{
        value:{
            cartList:[],
            isLoading:false,
            error:"",
            totalBillAmount:0,
            totalCartItem:0
        }
    },
    reducers:{
        addToUserCart: (state,action)=>{
            console.log(action.payload);
            state.value.cartList.push(action.payload);
            state.value.totalCartItem = state.value.cartList.length;

        },
        removeFromUserCar :(state,action)=>{
            state.value.cartList.splice(action.payload,1);
            state.value.totalCartItem = state.value.cartList.length;
        },
        clearCart :(state,action)=>{
            state.value.cartList = [];
            state.value.totalBillAmount = 0;
            state.value.totalCartItem = state.value.cartList.length;
        },
        updateCart: (state,action)=>{
            let product = JSON.parse(JSON.stringify(action.payload));
            product.purchaseQty = 1;
            product.total = product.productPrice;
            state.value.totalBillAmount = state.value.totalBillAmount + product.productPrice*1;
            state.value.cartList.push(product);
          },
        changeQty:(state,action)=>{
            let item = state.value.cartList[action.payload.index];
            item.purchaseQty = action.payload.purchaseQty+1;
            item.total = item.productPrice * item.purchaseQty;
            state.value.cartList.splice(action.payload.index,1,item);
            state.value.cartList.forEach(element=>{
            state.value.totalBillAmount+=element.total*1;
            })
        }
    },
    extraReducers :(builder)=>{
        builder.addCase(fetchCart.pending,(state,action)=>{
            state.value.isLoading = true;
        });
        builder.addCase(fetchCart.fulfilled,(state,action)=>{
            let  itemList = action.payload;
            if(itemList==null){
                state.value.cartList = [];
                state.value.isLoading = false;
            }
            else{
                itemList.forEach(element=>{
                    element.purchaseQty = 1;
                    element.total = element.productPrice;
                    state.value.totalBillAmount+=element.productPrice*1;
                    state.value.cartList.push(element);
                });
            }
            state.value.isLoading = false;
            state.value.totalCartItem = state.value.cartList.length;
        });
        builder.addCase(fetchCart.rejected,(state,action)=>{
            state.value.cartList = [];
            state.value.isLoading = false;
            state.value.error = "Oops Some Error";
        })
    }
})

export const {updateCart,clearCart,addToUserCart,removeFromUserCar,changeQty} = slice.actions;
export default slice.reducer;