import React from "react";
import { Text, View } from "react-native";
import {
  SearchResultContainer,
  StoreNameText,
  StoreInfoContainer,
  StoreInfoText,
} from "./SearchResultEle.style";

const SearchResultEle = (props): JSX.Element => {
  const { store_name, inha_location, main_menu, onPress } = props;
  return (
    <SearchResultContainer onPress={onPress}>
      <StoreNameText>{store_name}</StoreNameText>
      <StoreInfoContainer>
        <StoreInfoText>위치 {inha_location},</StoreInfoText>
        <StoreInfoText>메인메뉴 {main_menu}</StoreInfoText>
      </StoreInfoContainer>
    </SearchResultContainer>
  );
};

export default SearchResultEle;
