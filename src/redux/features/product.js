import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstance from "../../Helper/axiosInstance";

const initialState = {
  productData: [],
};

export const getProductDetails = createAsyncThunk("/product/get", async (id) => {
  try {
    const res = axiosInstance.get(`/product/${id}`);

    toast.promise(res, {
      loading: "Loading Product data...",
      success: "Product Data loaded successfully",
      error: "Failed to get Product",
    });

    const response = await res;

    return response.data.product;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

export const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setProductTags: (state, action) => {
      state.productTags = action.payload;
    },
    setImages: (state, action) => {
      state.images = action.payload;
    },
    setProductVariants: (state, action) => {
      state.variants = action.payload;
    },
    setWeight: (state, action) => {
      state.weight = action.payload;
    },
    setUnit: (state, action) => {
      state.unit = action.payload;
    },
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductDetails.fulfilled, (state, action) => {
      if (action.payload) {
        state.productData = [...action.payload];
      }
    });
  },
});

export const {
  setProductTags,
  setName,
  setDescription,
  setImages,
  setProductVariants,
  setUnit,
  setWeight,
  setQuantity,
} = product.actions;

export default product.reducer;
