import { configureStore } from "@reduxjs/toolkit";
import BrandReducer from "./BrandSlice";
import ProductReducer from "./ProductSlice";
import UserReducer from "./UserSlice";
const store   =  configureStore({
    reducer:{
        brand : BrandReducer,
        product :ProductReducer,
        user: UserReducer,
    }
});
export default store;