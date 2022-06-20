import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import NaverMapView, { Marker } from "react-native-nmap";
import { useAppDispatch, useAppSelector } from "../../hooks/index.hooks";
import { SvgXml } from "react-native-svg";
import {
  SearchInputTextContainer,
  SearchInputText,
  LargeCategoryContainer,
  CategoryElement,
} from "./map.style";
import { XIcon, BackIcon } from "../../assets/icon/icons";
import theme from "../../style/theme";
import { getLargeCategory } from "../../store/slice/categorySlice";

interface SearchResultType {
  favorited_count: number;
  inha_location: string;
  latitude: number;
  longitude: number;
  main_menu: string;
  store_name: string;
}

const Map = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const largeCategory = useAppSelector(
    (state) => state.categoryReducer.largeCatList
  );
  const initialCoord = { latitude: 37.452, longitude: 126.6575 };

  const [searchWord, setSearchWord] = useState("");
  const [searchResultList, setSearchResultList] = useState<SearchResultType[]>(
    []
  );
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [clickedLargeCategory, setClickedLargeCategory] = useState("");

  // 검색창 focus
  const handleFocus = () => {
    setIsSearching(false);
    setSearchResultList([]);
  };

  // x버튼 클릭 시 input 초기화
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

  // useEffect(() => {
  //   const fetchLargeCategory = async () => {
  //     await dispatch(getLargeCategory());
  //   };
  //   fetchLargeCategory();
  // }, []);

  return (
    <SafeAreaView>
      <SearchInputTextContainer>
        <TouchableOpacity onPress={navigation.goBack}>
          <SvgXml
            xml={BackIcon}
            width="20px"
            height="20px"
            fill={theme.colors.fontColor2}
          />
        </TouchableOpacity>

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

        <TouchableOpacity onPress={handleResetInput}>
          <SvgXml
            xml={XIcon}
            width="14px"
            height="14px"
            fill={searchWord.length !== 0 ? theme.colors.fontColor2 : "#fff"}
          />
        </TouchableOpacity>
      </SearchInputTextContainer>
      <LargeCategoryContainer horizontal showsHorizontalScrollIndicator={false}>
        {largeCategory.map((item, index) => {
          return (
            <CategoryElement
              key={index}
              targetCategory={item.name}
              clickedCat={clickedLargeCategory}
            >
              <Text onPress={() => setClickedLargeCategory(item.name)}>
                {item.name}
              </Text>
            </CategoryElement>
          );
        })}
      </LargeCategoryContainer>
      <NaverMapView
        style={{ width: "100%", height: "100%" }}
        showsMyLocationButton={true}
        center={{ ...initialCoord, zoom: 15.5 }}
      >
        {isSearching &&
          searchResultList.length !== 0 &&
          searchResultList.map((shop) => {
            const coord = {
              latitude: shop.latitude,
              longitude: shop.longitude,
            };

            return (
              <Marker
                coordinate={coord}
                width={30}
                height={40}
                caption={{ text: shop.store_name }}
              />
            );
          })}
      </NaverMapView>
    </SafeAreaView>
  );
};

export default Map;
