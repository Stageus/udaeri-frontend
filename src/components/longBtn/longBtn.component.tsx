import React, { useCallback } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import RootStackParamList from "../../navigation/rootStackNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { LongBtnContainer, LongBtnTitle } from "./longBtn.style";

export const LongBtn = (props): JSX.Element => {
  const { btnTitle, pageTitle } = props;
  const navigation = useNavigation();
  const movePage = useCallback(() => navigation.navigate(pageTitle), []);

  return (
    <LongBtnContainer onPress={movePage}>
      <LongBtnTitle>{btnTitle}</LongBtnTitle>
    </LongBtnContainer>
  );
};
