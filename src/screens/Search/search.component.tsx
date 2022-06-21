import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "../../hooks/index.hooks";
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
import { setCurStore } from "../../store/slice/curStateSlice";

interface SearchResultType {
  favorited_count: number;
  inha_location: string;
  latitude: number;
  longitude: number;
  main_menu: string;
  store_name: string;
}

const Search = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const [searchWord, setSearchWord] = useState("");
  const [searchResultList, setSearchResultList] = useState<SearchResultType[]>(
    []
  );
  const [isSearching, setIsSearching] = useState<boolean>(false);

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
              {searchResultList.map((item, index) => (
                <SearchResultEle
                  key={index}
                  store_name={item.store_name}
                  inha_location={item.inha_location}
                  main_menu={item.main_menu}
                  onPress={() => {
                    dispatch(setCurStore(item.store_name));
                    navigation.navigate("StorePage");
                  }}
                />
              ))}
            </SearchResultScrollView>
          ))}
      </View>
    </SafeAreaViewComp>
  );
};

export default Search;
