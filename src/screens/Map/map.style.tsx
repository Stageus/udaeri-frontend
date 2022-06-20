import styled, { css } from "styled-components/native";
import theme from "../../style/theme";
import { Animated } from "react-native";

export const SearchInputTextContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: #fff
  padding: 0 15px 0 10px;
  border-radius: 5px;
  justify-content: space-between;
  z-index: 5;
  position: absolute;
`;

export const SearchInputTextLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SearchInputText = styled.TextInput`
  width: 90%;
  padding: 12px;
`;

export const LargeCategoryContainer = styled.ScrollView`
  z-index: 5;
  position: absolute;
  top: 60px;
  margin-left: 10px;
`;

export const CategoryElement = styled.View<{
  targetCategory: string;
  clickedCat: string;
}>`
  align-items: center;
  justify-content: space-between;
  margin-right: 5px;
  padding: 6px 10px;
  border-radius: 15px;
  ${({ targetCategory, clickedCat }) => {
    return targetCategory === clickedCat
      ? `background-color: ${theme.colors.main}`
      : "background-color: #fff";
  }}
`;
