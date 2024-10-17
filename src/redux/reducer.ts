
import { artistiSlice } from "./slice/artistSlice";
import { eventSlice } from "./slice/eventSlice";
import { listingSlice } from "./slice/listingSlice";

import { HYDRATE } from "next-redux-wrapper";
import { Action, combineReducers } from "redux";

const combinedReducer = combineReducers({
  event: eventSlice.reducer,
  listing: listingSlice.reducer,
  artist:artistiSlice.reducer,
});

const reducer = (state: ReturnType<typeof combinedReducer>, action: Action & { payload: object }) => {
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

export default reducer