import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { List } from "reselect/es/types";

export interface UserState {
  isLoggedIn: boolean;
  userNickname: string;
  sponsor: boolean;
  jjimStore: string[];
}

const initialState: UserState = {
  isLoggedIn: false,
  userNickname: "",
  sponsor: false,
  jjimStore: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleLogin: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setUserNickname: (state, action) => {
      state.userNickname = action.payload;
    },
    checkSponsor: (state, action) => {
      state.sponsor = action.payload;
    },
    setJJimstore: (state, action) => {
      state.jjimStore = action.payload;
    },
  },
});

export const { handleLogin, setUserNickname, checkSponsor, setJJimstore } =
  userSlice.actions;

export default userSlice.reducer;
