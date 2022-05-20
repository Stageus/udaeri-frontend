import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

interface color {
    color : string;
}
interface text {
    id : string;
}

export const Container = styled.TouchableOpacity<color>`
    background-color: ${(props) => props.color};
    width: ${width * 0.6}px;
    height: 50px;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    margin: 5px;
`

export const Text = styled.Text<text>`
    color: ${(props) => (props.id === "kakao" ? css`#000000` : css`#ffffff`)};
`

export const Logo = styled.Image`
    width: 25px;
    height: 25px;
`