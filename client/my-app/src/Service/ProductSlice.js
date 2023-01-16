
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import WebApi from "../WebWork/WebApi";
import WebService from "../WebWork/webService";

export const fetchProduct =  createAsyncThunk("product/fetchProduct",async()=>{
    let res =  await WebService.getAPi(WebApi.LOAD_PRODUCT);
    if(res.data.status){
        return res.data.data;
    }
})
const productSlice = createSlice({
    name: 'product',
    initialState: {
        value: {
            productList: [],
            isLoading: false,
            error: ''
        }
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state) => {
            state.value.isLoading = true;
        });
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.value.productList = action.payload;
            console.log("In Product Slice")
            console.log(state.value.productList);
            state.value.isLoading = false;
        })
        builder.addCase(fetchProduct.rejected, (state) => {
            state.value.error = "Something went Wrong.....";
            state.value.value.productList = [];
            state.value.isLoading = false;
        })
    }
})
export const { add } = productSlice.actions;
export default productSlice.reducer;