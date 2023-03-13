import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import classesSlice from "./slices/classes-slice";

// Typing for redux toolkit

// Typing for the actual store (holds all of the Redux slices/states)
export type RootState = ReturnType<typeof store.getState>;

// Typing for the redux hooks that we use (dispatch, selector)
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Store holds all slices of the application
export const store = configureStore({
  reducer: {
    classes: classesSlice,
  },
});
