import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetAllProduct } from "../utils/api/getProduct";
const initialState = {
  data:0
};
export const fetchAllProduct = createAsyncThunk("user", async () => {
  return await GetAllProduct();
});

export const dataslice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProduct.fulfilled,(state,action)=>{
        state.data=action.payload.data.data.products
        // console.log(state.data);
    })
  },
});

export default dataslice.reducer;
