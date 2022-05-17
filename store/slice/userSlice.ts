import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { List } from 'reselect/es/types';

export interface UserState {
  isToken: boolean,
  userNickname: string,
  sponsor: boolean,
  jjimStore: string[],
}

const initialState: UserState = {
  isToken: false,
  userNickname : "",
  sponsor: false,
  jjimStore: []
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    checkToken: (state, action) => {
      state.isToken = action.payload;
    },
    setUserNickname: (state, action) => {
      state.userNickname = action.payload;
    },
    checkSponsor: (state, action) => {
      state.sponsor = action.payload
    },
    setJJimstore: (state, action) => {
      state.jjimStore = action.payload;
    }
  },
});

export const { checkToken, setUserNickname, checkSponsor, setJJimstore } = userSlice.actions;

export default userSlice.reducer;
