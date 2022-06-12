import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface categoryState {
  largeCatList: string[]; // 대분류 리스트
  midCatList: string[]; // 중분류 리스트
  curLargeCat: string; // 현재 선택된 대분류
  curMidCat: string; // 현재 선택된 중분류
  storeList : string[]; // 현재 선택된 분류의 상점 리스트 
}

const initialState: categoryState = {
  largeCatList: [],
  midCatList: [],
  curLargeCat: "",
  curMidCat: "",
  storeList : [],
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
    setStoreList : (state, action) => {
      state.storeList = action.payload;
    },
    addStoreList : (state, action) => {
      console.log(action.payload)
    }
  },
});

export const { setLargeCat, setMidCat, setCurLargeCat, setCurMidCat, setStoreList, addStoreList } = categorySlice.actions;
export default categorySlice.reducer;