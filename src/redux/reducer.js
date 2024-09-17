import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./slice/authSlice";

import { HYDRATE } from "next-redux-wrapper";

const combinedReducer = combineReducers({
  auth: authSlice.reducer,
});
const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export default reducer;
