import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding : 10px 10px;
`;

export const LogoText = styled.Text`
  font-weight: 800;
  font-size: 24px;
`;

export const UnivText = styled.Text`
  font-weight: 300;
  font-size: 16px;
`;

export const MiddleBlock = styled.View`
  padding-top: 10px;
  margin-bottom: 5px;
`;

export const CatWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;