/* eslint-disable @typescript-eslint/no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
import reducer from "@/redux/reducer";
import { createWrapper } from "next-redux-wrapper";

export default function configureAppStore(preloadedStates) {
  const {
    req,
    res,
    query,
    resolvedUrl,
    locales,
    defaultLocale,
    ...preloadedState
  } = preloadedStates;
  const store = configureStore({
    reducer,
    preloadedState,
  });

  return store;
}

export const wrapper = createWrapper(configureAppStore, { debug: false });
