import React from "react";
import styled, { css } from "styled-components/native";
import { Platform, StatusBar } from "react-native";

const SafeAreaView = styled.SafeAreaView`
  background-color: #fff;
  flex: 1;
  ${Platform.OS === "android"
    ? css`
        padding-top: ${StatusBar.currentHeight}px;
      `
    : undefined}
`;

interface SafeAreaViewProp {
  children: JSX.Element;
}

const SafeAreaViewComp = ({ children }: SafeAreaViewProp): JSX.Element => {
  return <SafeAreaView>{children}</SafeAreaView>;
};

export default SafeAreaViewComp;
