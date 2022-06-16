import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SvgXml } from "react-native-svg";
import axios from "axios";
import theme from "../../style/theme";
import {
  SearchInputTextContainer,
  SearchInputText,
  SearchInputTextLeft,
  EmptySearchResulContainer,
  EmptySearchResulText,
  SearchResultScrollView,
} from "./search.style";
import { SearchIcon, XIcon, WarningIcon } from "../../assets/icon/icons";
import SafeAreaViewComp from "../../components/safeAreaViewComp/safeAreaViewComp";
import SearchResultEle from "../../components/SearchResultEle/SearchResultEle.component";

// import {useAppDispatch, useAppSelector} from '../../../store/hooks';
// import {ageCounter, nameChange} from '../../../store/slice/userSlice';

interface SearchResultType {
  favorited_count: number;
  inha_location: string;
  latitude: number;
  longitude: number;
  main_menu: string;
  store_name: string;
}

const Search = (): JSX.Element => {
  const [searchWord, setSearchWord] = useState("");
  const [searchResultList, setSearchResultList] = useState<SearchResultType[]>(
    []
  );
  const [isSearching, setIsSearching] = useState<boolean>(false);

  //const SEARCH_WORDS_LIST_KEY = "@searchWords";

  //  asyncstorage에 있는 최근검색어 가져오기
  // const getRecentSearchList = async () => {
  //   const searchedList = await AsyncStorage.getItem(SEARCH_WORDS_LIST_KEY);
  //   if (searchedList && searchedList.length !== 0) {
  //     setRecentSearchList(JSON.parse(searchedList));
  //   }
  // };

  //  asyncstorage에 최근검색어 저장하기
  // const saveRecentSearchList = async (recentSearchList: string[]) => {
  //   await AsyncStorage.setItem(
  //     SEARCH_WORDS_LIST_KEY,
  //     JSON.stringify(recentSearchList)
  //   );
  // };

  // const addNewSearchWord = (word: string) => {
  //   setRecentSearchList([...recentSearchList, word]);
  // };

  // input에 글자 입력하면 나타나는 x 버튼 클릭 시 input 초기화
  const handleResetInput = () => {
    setSearchWord("");
    setIsSearching(false);
  };

  // 검색어 submit
  const handleSubmit = async (word) => {
    try {
      setIsSearching(true);
      const res = await axios.post("search/stores/1", { text: word });
      setSearchResultList(res.data);
      console.log("결과", res.data);
    } catch (err) {
      console.log("검색결과 못 가져옴", err);
    }
  };

  // 검색창 focus
  const handleFocus = () => {
    setIsSearching(false);
    setSearchResultList([]);
  };

  return (
    <SafeAreaViewComp>
      <View>
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
              onFocus={handleFocus}
              onChangeText={(value) => setSearchWord(value)}
              onSubmitEditing={() => handleSubmit(searchWord)}
            ></SearchInputText>
          </SearchInputTextLeft>
          <TouchableOpacity onPress={handleResetInput}>
            {searchWord.length !== 0 && (
              <SvgXml
                xml={XIcon}
                width="16px"
                height="16px"
                fill={theme.colors.fontColor2}
              />
            )}
          </TouchableOpacity>
        </SearchInputTextContainer>
        {isSearching &&
          (searchResultList.length === 0 ? (
            <EmptySearchResulContainer>
              <SvgXml
                xml={WarningIcon}
                width="45px"
                height="45px"
                fill={theme.colors.fontColor2}
              />
              <EmptySearchResulText>검색 결과가 없습니다</EmptySearchResulText>
            </EmptySearchResulContainer>
          ) : (
            <SearchResultScrollView>
              {searchResultList.map((item) => (
                <SearchResultEle
                  store_name={item.store_name}
                  inha_location={item.inha_location}
                  main_menu={item.main_menu}
                />
              ))}
            </SearchResultScrollView>
          ))}
      </View>
    </SafeAreaViewComp>
  );
};

export default Search;
