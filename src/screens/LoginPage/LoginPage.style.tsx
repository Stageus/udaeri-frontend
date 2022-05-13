import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
    height: ${height}px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: ${height * 0.1}px 0;
`

export const LogoBlock = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LogoText = styled.Text`
    font-size: 56px;
    color: #ff9933;
`

export const SubLogoText = styled.Text`
    font-size: 32px;
    color: #ff9933;
`

export const LoginBlock = styled.View`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const BarBlock = styled.View`
    margin: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: ${width * 0.6}px;
`

export const Bar = styled.View`
    background-color: #c0c0c0;
    height: 1px;
    width: ${width * 0.2};
`

export const BarText = styled.Text`
    color: #c0c0c0;
    font-family: "Regular";
    font-size: 14px;
    margin: 0 5px;
`