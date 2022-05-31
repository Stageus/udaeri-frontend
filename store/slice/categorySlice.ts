import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface categoryState {
  largeCatList: string[]; // 대분류 리스트
  midCatList: string[]; // 중분류 리스트
  curLargeCat: string; // 현재 선택된 대분류
  curMidCat: string; // 현재 선택된 중분류
  curStoreList : string[]; // 현재 선택된 분류의 상점 리스트 
}

const initialState: categoryState = {
  largeCatList: [],
  midCatList: [],
  curLargeCat: "",
  curMidCat: "",
  curStoreList : [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setLargeCat: (state, action) => {
      state.largeCatList = action.payload;
    },
    setMidCat: (state, action) => {
      state.midCatList = action.payload;
    },
    setCurLargeCat: (state, action) => {
      state.curLargeCat = action.payload;
    },
    setCurMidCat: (state, action) => {
      state.curMidCat = action.payload;
    },
    addCurStoreList : (state, action) => {
      console.log(action)
    }
  },
});

export const { setLargeCat, setMidCat, setCurLargeCat, setCurMidCat, addCurStoreList } = categorySlice.actions;
export default categorySlice.reducer;
