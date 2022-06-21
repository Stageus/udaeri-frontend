import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { List } from "reselect/es/types";

export interface UserState {
  curStore: string;
  jjimState: boolean;
}

const initialState: UserState = {
  curStore: "",
  jjimState: false,
};

export const curStateSlice = createSlice({
  name: "curState",
  initialState,
  reducers: {
    setCurStore: (state, action) => {
      state.curStore = action.payload;
    },
    setJJimState: (state, action) => {
      state.jjimState = action.payload;
    },
  },
});

export const { setCurStore, setJJimState } = curStateSlice.actions;

export default curStateSlice.reducer;
