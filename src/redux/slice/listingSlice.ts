import { createSlice } from "@reduxjs/toolkit";
import { businessEditApi, listingView } from "../services/listingService";


import { buisnessListingApi } from "../services/listingService";

const buisnessListingCases = [
  { api: buisnessListingApi, name: "buisnessListingApi", isLoading: true },
  { api: listingView, name: "listingView", isLoading: true },
  { api: businessEditApi, name: "businessEditApi", isLoading: true },
];

type AsyncAction = {
  isLoading: boolean;
  data: unknown;
  error: unknown;
};

type Org = Record<string, AsyncAction>;

const initialState: Org = {};

buisnessListingCases.forEach((api) => {
  initialState[api.name] = {
    isLoading: false,
    data: null,
    error: null,
  };
});

export const listingSlice = createSlice({
  name: "listingSlice",
  initialState,
  reducers: {
    setEventState: (state, action) => {
      state.eventState = action.payload;
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
          state[cases.name].error = payload || null;
          state[cases.name].data = null;
        });
    });
  },
});

export const  listingDispatch  = listingSlice.actions;
