import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding : 10px 10px;
`;

export const Header = {
  Container : styled.View`
    padding : 10px 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  LogoText : styled.Text`
    font-weight: 800;
    font-size: 24px;
  `,
  UnivText : styled.Text`
    font-weight: 300;
    font-size: 16px;
  ` 
}

export const MiddleBlock = {
  Container : styled.View`
    padding-top: 10px;
    margin-bottom: 5px;
    flex-direction: column;
    align-items: center;
  `,
  CatWrap : styled.View`
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  `
};