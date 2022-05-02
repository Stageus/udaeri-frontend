import {createSlice} from '@reduxjs/toolkit';

export interface UserState {
  name: string;
  age: number;
}

const initialState: UserState = {
  name: 'yujin',
  age: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    ageCounter: state => {
      state.age += 1;
    },
    nameChange: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const {ageCounter, nameChange} = userSlice.actions;

export default userSlice.reducer;
