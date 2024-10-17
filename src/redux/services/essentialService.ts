import SERVERNEW from "@/utils/helpers/authAxios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const essentialApi = createAsyncThunk(
  "essentialApi",
  async (params, thunkAPI) => {
    console.log(params,"paramssss");
    
    try {
      const response = await SERVERNEW.get(`/common/essentials?required=${params.type}`);
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
