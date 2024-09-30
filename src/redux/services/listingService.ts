import SERVER from "@/utils/helpers/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const buisnessListingApi = createAsyncThunk(
    "buisnessListingApi",
    async (params, thunkAPI) => {
 
      try {
        const response = await SERVER.get(`/services`, {
          params
        });
        return response?.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error );
      }
    }
  );


export const listingView = createAsyncThunk(
  "listingView",
  async (params, thunkAPI) => {
    try {
      const response = await SERVER.get(`/services/detail/${params?.slug}`);
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
