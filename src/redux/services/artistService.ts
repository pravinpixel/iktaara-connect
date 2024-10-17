import SERVER from "@/utils/helpers/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const ListingApi = createAsyncThunk(
//     "buisnessListingApi",
//     async (params, thunkAPI) => {
 
//       try {
//         const response = await SERVER.get(`/services`, {
//           params
//         });
//         return response?.data;
//       } catch (error) {
//         return thunkAPI.rejectWithValue(error );
//       }
//     }
//   );


export const artistView = createAsyncThunk(
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
