import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { List } from "reselect/es/types";

interface JjimStoreType {
  store_name: string;
  l_category: string;
}

export interface UserState {
  isLoggedIn: boolean;
  userNickname: string;
  sponsor: boolean;
  jjimStore: JjimStoreType[];
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
    addJjimStore: (state, action) => {
      const newJjimStore = {
        store_name: action.payload.store_name,
        l_category: action.payload.l_category,
      };
      state.jjimStore = [...state.jjimStore, newJjimStore];
    },
    deleteJjimStore: (state, action) => {
      const idx = state.jjimStore.findIndex(function (item) {
        return item.store_name === action.payload;
      });
      state.jjimStore.splice(idx, 1);
    },
  },
});

export const {
  handleLogin,
  setUserNickname,
  checkSponsor,
  setJJimstore,
  addJjimStore,
  deleteJjimStore,
} = userSlice.actions;

export default userSlice.reducer;
