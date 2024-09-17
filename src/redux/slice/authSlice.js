import { createSlice } from "@reduxjs/toolkit";
import { authLogin } from "@/redux/services/authService";

const authCases = [{ api: authLogin, name: "authLogin", isLoading: true }];

const initialState = {
  authState: false,
};

authCases.forEach((api) => {
  initialState[api.name] = {
    isLoading: false,
    data: null,
    error: null,
  };
});

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setAuthState: (state, action) => {
      state.authState = action.payload;
    },
  },
  extraReducers: (builder) => {
    authCases.forEach((cases) => {
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
          state[cases.name].error = payload;
          state[cases.name].data = null;
        });
    });
  },
});

export const { authDispatch } = authSlice.actions;
