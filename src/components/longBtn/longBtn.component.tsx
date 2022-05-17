import React, { useCallback } from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
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
