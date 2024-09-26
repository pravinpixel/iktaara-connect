import { createSlice } from "@reduxjs/toolkit";


import { buisnessListingApi } from "../services/listingService";

const buisnessListingCases = [{ api: buisnessListingApi, name: "buisnessListingApi", isLoading: true },
 
];

const initialState = {
  buisnessListState: false,
};

buisnessListingCases.forEach((api) => {
  initialState[api.name] = {
    isLoading: false,
    data: null,
    error: null,
  };
});

export const buisnessListSlice = createSlice({
  name: "buisnessListSlice",
  initialState,
  reducers: {
    setbuisnessListState: (state, action) => {
      state.buisnessListState = action.payload;
    },
  },
  extraReducers: (builder) => {
    buisnessListingCases.forEach((cases) => {
      builder
        .addCase(cases.api.fulfilled, (state, { payload }) => {
        
          state[cases.name].isLoading = false;
          state[cases.name].data = payload?.data ?? null;
          state[cases.name].error = null;
        })
        .addCase(cases.api.pending, (state) => {
          state[cases.name].isLoading = true;
          state[cases.name].error = null;
          state[cases.name].data = null;
        })
        .addCase(cases.api.rejected, (state, { payload }) => {
         
          state[cases.name].isLoading = false;
          state[cases.name].error = payload || null ;
          state[cases.name].data = null;
        });
    });
  },
});

export const { buisnessListDispatch } = buisnessListSlice.actions;
