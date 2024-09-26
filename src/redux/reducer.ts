import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./slice/authSlice";

import { HYDRATE } from "next-redux-wrapper";
import { eventSlice } from "./slice/eventSlice";
import { buisnessListSlice } from "./slice/listingSlice";

const combinedReducer = combineReducers({
  event: eventSlice.reducer,
  listing: buisnessListSlice.reducer,
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
