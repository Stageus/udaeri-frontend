import styled from "styled-components/native";
import { Dimensions } from "react-native";
import BackBtn from "./BackBtn/BackBtn.component";
import theme from '../../style/theme';
const { width, height } = Dimensions.get("window");

interface Props {
    center : boolean;
}

export const HeaderBarContainer = styled.View<Props>`
    height: ${height * 0.07}px;
    align-items: center;
    flex-direction: row;
    padding: 10px 20px;
    border-bottom-width: 1px;
    border-color: ${theme.colors.lineColor2};

    ${({ center }) => {
      return center === true
        ? `justify-content: center;`
        : `justify-content: space-between;`;
    }}
`;

export const StoreName = styled.Text`
    font-size: 24px;
`;