import styled, { css } from "styled-components/native";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import theme from "../../style/theme";

export const SearchResultContainer = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.lineColor2};
  padding: 15px 18px;
`;

export const StoreNameText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const StoreInfoContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

export const StoreInfoText = styled.Text`
  font-size: 16px;
`;
