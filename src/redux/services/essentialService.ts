import SERVERNEW from "@/utils/helpers/authAxios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const essentialApi = createAsyncThunk(
  "essentialApi",
  async (params, thunkAPI) => {
  
    
    try {
      const response = await SERVERNEW.get(`/common/essentials?required=${params.essentialData}`);
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const essentialLocationApi = createAsyncThunk(
  "essentialLocationApi",
  async (params, thunkAPI) => {

    
    try {
      const response = await SERVERNEW.get(`/common/location/${params.id}
`);
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
