import styled, {css} from "styled-components/native";
import { Platform, StatusBar } from "react-native";

export const Conatiner = styled.View`
    background-color: #fff;
    ${Platform.OS === "android"
      ? css`
          padding-top: ${StatusBar.currentHeight}px;
    `
    : undefined}
`

export const StoreBlock = styled.View`
    height: 100%;
`

export const Content = styled.View`
    height: 100%;
`