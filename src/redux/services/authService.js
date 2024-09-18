import SERVER from "@/utils/helpers/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const authLogin = createAsyncThunk(
  "login",
  async (bodyParams, thunkAPI) => {
    console.log(bodyParams, "bodyParams");
    try {
      const response = await SERVER.post(`/api/login`, bodyParams);
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
