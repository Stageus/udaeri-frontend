import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import { SvgXml } from "react-native-svg";
import SafeAreaViewComp from "../../components/safeAreaViewComp/safeAreaViewComp";

import {
  SearchInputTextContainer,
  SearchInputText,
  SearchInputTextLeft,
} from "./search.style";
import { SearchIcon, XIcon } from "../../assets/icon/icons";
import theme from "../../style/theme";

// import {useAppDispatch, useAppSelector} from '../../../store/hooks';
// import {ageCounter, nameChange} from '../../../store/slice/userSlice';

const Search = (): JSX.Element => {
  const [searchWord, setSearchWord] = useState("");
  const [recentSearchList, setRecentSearchList] = useState([]);

  const SEARCH_WORDS_LIST_KEY = "@searchWords";

  // asyncstorage에 있는 최근검색어 가져오기
  const getRecentSearchList = async () => {
    const searchedList = await AsyncStorage.getItem(SEARCH_WORDS_LIST_KEY);
    if (searchedList && searchedList.length !== 0) {
      setRecentSearchList(JSON.parse(searchedList));
    }
  };

  // asyncstorage에 최근검색어 저장하기
  const saveRecentSearchList = async (recentSearchList: []) => {
    await AsyncStorage.setItem(
      SEARCH_WORDS_LIST_KEY,
      JSON.stringify(recentSearchList)
    );
  };

  return (
    <SafeAreaViewComp>
      <SearchInputTextContainer>
        <SearchInputTextLeft>
          <SvgXml
            xml={SearchIcon}
            width="14px"
            height="14px"
            fill={theme.colors.fontColor2}
          />
          <SearchInputText
            value={searchWord}
            multiline={false}
            returnKeyType={"search"}
            placeholder="가게명, 상품 이름"
            maxLength={15}
            onChangeText={(value) => setSearchWord(value)}
          ></SearchInputText>
        </SearchInputTextLeft>

        {searchWord.length !== 0 && (
          <SvgXml
            xml={XIcon}
            width="16px"
            height="16px"
            fill={theme.colors.fontColor2}
          />
        )}
      </SearchInputTextContainer>
    </SafeAreaViewComp>
  );
};

export default Search;
