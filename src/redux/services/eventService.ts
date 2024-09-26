import SERVER from "@/utils/helpers/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const eventHome = createAsyncThunk(
    "eventHome",
    async (params, thunkAPI) => {
 
      try {
        const response = await SERVER.get(`/get/events/list`, {
          params
        });
        return response?.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error );
      }
    }
  );


  export const eventCategory = createAsyncThunk(
    "eventCategory",
    async (params, thunkAPI) => {
 
      try {
        const response = await SERVER.get(`/get/events/category`, {
          params
        });
        return response?.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error );
      }
    }
  );

  export const eventDetails = createAsyncThunk(
    "eventDetails",
    async (params, thunkAPI) => {
 
      try {
        const response = await SERVER.get(`get/events/details/1`, {
          params
        });
        return response?.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error );
      }
    }
  );


  
  export const similarEventDetails = createAsyncThunk(
    "similarEventDetails",
    async (params, thunkAPI) => {
 
      try {
        const response = await SERVER.get(`get/events/similar-events`, {
          params
        });
        return response?.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error );
      }
    }
  );