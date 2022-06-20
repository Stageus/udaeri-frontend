import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface CategoryType {
  name: string;
  icon_url: string;
}

export interface categoryState {
  largeCatList: CategoryType[]; // 대분류 리스트
  midCatList: CategoryType[]; // 중분류 리스트
  curLargeCat: string; // 현재 선택된 대분류
  curMidCat: string; // 현재 선택된 중분류
  storeList: string[]; // 현재 선택된 분류의 상점 리스트
}

const initialState: categoryState = {
  largeCatList: [],
  midCatList: [],
  curLargeCat: "",
  curMidCat: "",
  storeList: [],
};

export const getLargeCategory = createAsyncThunk(
  "category/LargeCategory",
  async () => {
    const response = await axios.get("/l-categories");
    return response.data;
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    // setLargeCat: (state, action) => {
    //   state.largeCatList = action.payload;
    // },
    setMidCat: (state, action) => {
      state.midCatList = action.payload;
    },
    setCurLargeCat: (state, action) => {
      state.curLargeCat = action.payload;
    },
    setCurMidCat: (state, action) => {
      state.curMidCat = action.payload;
    },
    setStoreList: (state, action) => {
      state.storeList = action.payload;
    },
    addStoreList: (state, action) => {
      console.log(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLargeCategory.fulfilled, (state, action) => {
        state.largeCatList = action.payload.list;
      })
      .addCase(getLargeCategory.rejected, (state) => {
        state.largeCatList = [];
      });
  },
});

export const {
  // setLargeCat,
  setMidCat,
  setCurLargeCat,
  setCurMidCat,
  setStoreList,
  addStoreList,
} = categorySlice.actions;
export default categorySlice.reducer;
