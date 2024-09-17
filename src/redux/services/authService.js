import SERVER from "@/helpers/AxiosConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const authLogin = createAsyncThunk(
  "login",
  async (bodyParams, thunkAPI) => {
    try {
      const response = await SERVER.post(`/api/ogin`, bodyParams);
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
