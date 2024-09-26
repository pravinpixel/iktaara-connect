import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import reducer from './reducer';
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux';



export const makeStore = () =>
  configureStore({
    reducer: reducer as never,
  });

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;





export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => Store = useStore;

export const wrapper = createWrapper(makeStore, { debug: true });