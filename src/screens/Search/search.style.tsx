import styled, { css } from "styled-components/native";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import theme from "../../style/theme";

export const SearchInputTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${theme.colors.BGColor1};
  margin: 0 20px;
  padding: 0 10px;
  border-radius: 5px;
  justify-content: space-between;
`;

export const SearchInputTextLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SearchInputText = styled.TextInput`
  width: 90%;
  padding: 12px;
`;

export const EmptySearchResulContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
`;

export const EmptySearchResulText = styled.Text`
  font-size: 24px;
  color: ${theme.colors.fontColor2};
  margin-top: 15px;
  font-weight: bold;
`;

export const SearchResultScrollView = styled.ScrollView`
  margin-top: 15px;
  height: 100%;
`;
