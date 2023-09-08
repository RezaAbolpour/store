import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetAllProduct } from "../utils/api/getProduct";
import { GetAllCategori } from "../utils/api/getCategori";
import { GetSubCategori } from "../utils/api/getCategori";
import { GetProductId } from "../utils/api/getProductId";
import { getOredrById } from "../utils/api/getOrderByUserId";
const initialState = {
  data: 0,
  Categori: 0,
  subCategori: 0,
  product: 0,
  userdata: 0,
  order:[]
};
export const fetchAllProduct = createAsyncThunk("product", async () => {
  return await GetAllProduct();
});

export const fetchAllOrder = createAsyncThunk("Order", async (id) => {
  return await getOredrById(id);
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
  reducers: {
    setuser: (state, action) => {
      state.userdata = action.payload;
      console.log(state.userdata);
    },
    setorder: (state, action) => {
      state.order.push(action.payload)
      console.log(state.order);
    },
  },
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

    builder.addCase(fetchAllOrder.fulfilled, (state, action) => {
      state.order = action.payload.data.data.orders;
      // console.log(state.product);
    });
  },
});

export const { setuser } = dataslice.actions;
export const { setorder } = dataslice.actions;
export default dataslice.reducer;
