import styled from "styled-components/native";
import theme from "../../style/theme";

export const Container = styled.TouchableOpacity`
    align-items: center;
    justify-content: space-between;
    margin: 12px 20px;
`;

export const Thumbnail = styled.View`
    background-color: ${theme.colors.main};
    width: 48px;
    height: 48px;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
`

export const CatTitle = styled.Text`
    margin-top: 5px;
    font-size: 16px;
    color: black;
    font-family: ${theme.font.Regular};
`;