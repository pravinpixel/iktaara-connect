import { createSlice } from "@reduxjs/toolkit";

import { artistSaveApi, artistShareUpdateApi, artistViewApi } from "../services/artistService";

const artistCases = [
   { api: artistViewApi, name: "artistViewApi", isLoading: true },
   { api: artistSaveApi, name: "artistSaveApi", isLoading: true },
      { api: artistShareUpdateApi, name: "artistShareUpdateApi", isLoading: true },
];

type AsyncAction = {
  isLoading: boolean;
  data: unknown;
  error: unknown;
};

type Org = Record<string, AsyncAction>;

const initialState: Org = {};

artistCases.forEach((api) => {
  initialState[api.name] = {
    isLoading: false,
    data: null,
    error: null,
  };
});

export const artistiSlice = createSlice({
  name: "artistiSlice",
  initialState,
  reducers: {
    setEventState: (state, action) => {
      state.eventState = action.payload;
    },
  },
  extraReducers: (builder) => {
    artistCases.forEach((cases) => {
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

export const  artistDispatch  = artistiSlice.actions;
