import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
    flex: 1;
    position : absolute;
`;
export const ReviewWriteBtnBlock = styled.TouchableOpacity`
    position: absolute;
    top : ${height - (height / 3)}px;
    left : ${width - (width / 5)}px;
    width : ${width / 8}px;
    height : ${width / 8}px;
    background-Color: #ff9933;
    align-Items: center;
    justify-Content: center;
    border-Radius: ${height / 10}px;
`;