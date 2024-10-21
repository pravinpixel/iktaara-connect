import SERVER from "@/utils/helpers/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const artistSaveApi = createAsyncThunk(
    "artistSaveApi",
    async (params, thunkAPI) => {
   
      try {
        const response = await SERVER.post(`/artist/save`, 
          params
        );
        return response?.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error );
      }
    }
  );


export const artistViewApi = createAsyncThunk(
  "artistView",
  async (params, thunkAPI) => {
    try {
      const response = await SERVER.get(`/artist/1`);
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
