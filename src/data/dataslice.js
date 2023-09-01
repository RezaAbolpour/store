import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetAllProduct } from "../utils/api/getProduct";
import { GetAllCategori } from "../utils/api/getCategori";
import { GetSubCategori } from "../utils/api/getCategori";
import { GetProductId } from "../utils/api/getProductId";
const initialState = {
  data: 0,
  Categori:0,
  subCategori:0,
  product:0,
};
export const fetchAllProduct = createAsyncThunk("product", async () => {
  return await GetAllProduct();
});

export const fetchProductId = createAsyncThunk("productId", async (id) => {
  return await GetProductId(id);
});

export const fetchAllCategori = createAsyncThunk("Categori", async () => {
  return await GetAllCategori();
});

export const fetchSubCategori = createAsyncThunk("subCategori", async () => {
  return await GetSubCategori();
});

export const dataslice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProduct.fulfilled, (state, action) => {
      state.data = action.payload.data.data.products;
      // console.log(state.data);
    });

    builder.addCase(fetchAllCategori.fulfilled, (state, action) => {
      state.Categori = action.payload.data.data.categories;
      // console.log(state.Categori);
    });

    builder.addCase(fetchSubCategori.fulfilled, (state, action) => {
      state.subCategori = action.payload.data.data.subcategories;
      // console.log(state.subCategori);
    });

    builder.addCase(fetchProductId.fulfilled, (state, action) => {
      state.product = action.payload.data.data.product;
      // console.log(state.product);
    });
  },
});

export default dataslice.reducer;
