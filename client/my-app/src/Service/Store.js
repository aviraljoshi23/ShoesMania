import { configureStore } from "@reduxjs/toolkit";
import BrandReducer from "./BrandSlice";
import ProductReducer from "./ProductSlice";
import UserReducer from "./UserSlice";
import CartReducer from "./CartSlice";
const store = configureStore({
    reducer:{
        brand : BrandReducer,
        product :ProductReducer,
        user: UserReducer,
        cart:CartReducer
    }
});
export default store;