import styled from "styled-components/native";
import { Dimensions } from "react-native";
import theme from "../../style/theme";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 10px 10px;
`;

export const Header = {
  Container: styled.View`
    padding: 10px 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  LogoText: styled.Text`
    font-size: 20px;
    // font-family: ${theme.font.Bold};
    color: ${theme.colors.main};
  `,
  UnivText: styled.Text`
    font-size: 20px;
    //font-family: ${theme.font.Bold};
    color: ${theme.colors.fontColor1};
  `,
};

export const MiddleBlock = {
  Container: styled.View`
    padding-top: 10px;
    margin-bottom: 5px;
    flex-direction: column;
    align-items: center;
  `,
  CatWrap: styled.View`
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  `,
};
