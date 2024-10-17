import { createSlice } from "@reduxjs/toolkit";
import { essentialApi } from "../services/essentialService";



const essentialCases = [
    { api: essentialApi, name: "essentialApi", isLoading: true },
 
];

type AsyncAction = {
  isLoading: boolean;
  data: unknown;
  error: unknown;
};

type Org = Record<string, AsyncAction>;

const initialState: Org = {};

essentialCases.forEach((api) => {
  initialState[api.name] = {
    isLoading: false,
    data: null,
    error: null,
  };
});

export const essentialSlice = createSlice({
  name: "essentialSlice",
  initialState,
  reducers: {
    setEventState: (state, action) => {
      state.eventState = action.payload;
    },
  },
  extraReducers: (builder) => {
    essentialCases.forEach((cases) => {
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

export const  essentialDispatch  = essentialSlice.actions;
