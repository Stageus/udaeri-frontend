import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  JjimContainer,
  IconWrap,
  CatTitle,
  ShopName,
  TextContainer,
} from "./home-jjimEle.style";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

export const HomeJjimEle = (props): JSX.Element => {
  const { categoryTitle, shopName } = props;

  const navigation = useNavigation();
  const movePage = useCallback(
    () => navigation.navigate(shopName, { key: shopName }),
    []
  );

  return (
    <JjimContainer activeOpacity={0.8} onPress={movePage}>
      <IconWrap></IconWrap>
      <TextContainer>
        <CatTitle>{categoryTitle}</CatTitle>
        <ShopName numberOfLines={1}>{shopName}</ShopName>
      </TextContainer>
    </JjimContainer>
  );
};
