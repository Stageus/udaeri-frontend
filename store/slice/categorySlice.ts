import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface categoryState {
  largeCat: string[];
  midCat: string[];
  curLargeCat: string;
  curMidCat: string;
}

const initialState: categoryState = {
  largeCat: [],
  midCat: [],
  curLargeCat: "",
  curMidCat: "",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setLargeCat: (state, action) => {
      state.largeCat = action.payload;
    },
    setMidCat: (state, action) => {
      state.midCat = action.payload;
    },
    setCurLargeCat: (state, action) => {
      state.curLargeCat = action.payload;
    },
    setCurMidCat: (state, action) => {
      state.curMidCat = action.payload;
    },
  },
});

export const { setLargeCat } = categorySlice.actions;
export default categorySlice.reducer;
