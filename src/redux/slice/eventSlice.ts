import { createSlice } from "@reduxjs/toolkit";

import { eventCategory, eventDetails, eventHome, similarEventDetails } from "../services/eventService";

const eventCases = [{ api: eventHome, name: "eventHome", isLoading: true },
  { api: eventCategory, name: "eventCategory", isLoading: true },
  { api: eventDetails, name: "eventDetails", isLoading: true },
  { api: similarEventDetails, name: "similarEventDetails", isLoading: true }
];

const initialState = {
  eventState: false,
};

eventCases.forEach((api) => {
  initialState[api.name] = {
    isLoading: false,
    data: null,
    error: null,
  };
});

export const eventSlice = createSlice({
  name: "eventSlice",
  initialState,
  reducers: {
    setEventState: (state, action) => {
      state.eventState = action.payload;
    },
  },
  extraReducers: (builder) => {
    eventCases.forEach((cases) => {
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

export const { eventDispatch } = eventSlice.actions;
