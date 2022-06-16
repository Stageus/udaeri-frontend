import { View } from "react-native";

import React, { useState } from "react";
import SafeAreaViewComp from "../../components/safeAreaViewComp/safeAreaViewComp";
import {
  Container,
  LoginBlock,
  LogoBlock,
  LogoText,
  SubLogoText,
} from "./LoginPage.style";

import SNSLoginBar from "../../components/SNSLoginBar/SNSLoginBar.component";

const LoginPage = (): JSX.Element => {
  return (
    <SafeAreaViewComp>
      <View>
        <Container>
          <LogoBlock>
            <LogoText>우대리</LogoText>
            <SubLogoText>우리들의 대학거리</SubLogoText>
          </LogoBlock>
          <LoginBlock>
            <SNSLoginBar id={"kakao"} moveScreen={"KakaoLogin"} />
            <SNSLoginBar id={"naver"} moveScreen={"NaverLogin"} />
          </LoginBlock>
        </Container>
      </View>
    </SafeAreaViewComp>
  );
};

export default LoginPage;
