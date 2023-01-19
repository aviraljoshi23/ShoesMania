
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import WebApi from "../WebWork/WebApi";
import WebService from "../WebWork/webService";

export const fetchBrand = createAsyncThunk("brand/fetchBrand", async () => {
    let res = await WebService.getAPi(WebApi.LOAD_BRAND);
    if (res.data.status) {
        return res.data.data;
    }
})
const brandSlice = createSlice({
    name: 'brand',
    initialState: {
        value: {
            brandList: [],
            isLoading: false,
            error: ''
        }
    },
    reducers: {
        add: (state, action) => {
            state.value.brandList.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBrand.pending, (state) => {
            state.value.isLoading = true;
        });
        builder.addCase(fetchBrand.fulfilled, (state, action) => {
            state.value.brandList = action.payload;
            state.value.isLoading = false;
        })
        builder.addCase(fetchBrand.rejected, (state) => {
            state.value.error = "Something went Wrong.....";
            state.value.value.brandList = [];
            state.value.isLoading = false;
        })
    }
})
export const { add } = brandSlice.actions;
export default brandSlice.reducer;