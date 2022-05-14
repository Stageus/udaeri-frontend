import {createSlice} from '@reduxjs/toolkit';

export interface UserState {
  tokenCheck: boolean;
  userNickName: string | null;
}

const initialState: UserState = {
  tokenCheck : false,
  userNickName : null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    checkToken: (state, {payload}) => {
      state.tokenCheck = payload.token;
    },
    restoreUserNickname: (state, {payload}) => {
      state.userNickName = payload.nickname;
    },
  },
});

export const {checkToken, restoreUserNickname} = userSlice.actions;
export const isToken = (state) => state.user.tokenCheck; // 9.

export default userSlice.reducer;
