import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slice/userSlice";
import { categorySlice } from "./slice/categorySlice";
import {curStateSlice} from './slice/curStateSlice';

export const store = configureStore({
  reducer: {
    userReducer: userSlice.reducer,
    curStateReducer: curStateSlice.reducer,
    categoryReducer: categorySlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
