import SERVER from "@/utils/helpers/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const buisnessListingApi = createAsyncThunk(
  "buisnessListingApi",
  async (params, thunkAPI) => {
    try {
      const response = await SERVER.get(`/services`, {
        params,
      });
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const listingView = createAsyncThunk(
//   "listingView",
//   async (params: Params, thunkAPI) => {
//     console.log(params, "params");

//     try {
//       const response = await SERVER.get(`/business/${params}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );


export const listingView = createAsyncThunk("listingView", async () => {
  try {
    const response = await SERVER.get(`/business/3`);
    return response.data;
  } catch (error) {
    
  }
});

export const businessEditApi = createAsyncThunk(
  "businessEditApi",
  async (params, thunkAPI) => {
    try {
      const response = await SERVER.postForm(`/business/save`, params);
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
