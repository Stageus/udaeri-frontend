import React from "react";
import theme from "../../style/theme";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { CrownIcon, GearIcon } from "../../assets/icon/icons";
import { ScrollView, Container, Top, Mid } from "./My-page.style";
import SafeAreaViewComp from "../../components/safeAreaViewComp/safeAreaViewComp";
import { logout } from "@react-native-seoul/kakao-login";
import HeaderBar from "../../components/HeaderBar/HeaderBar.component";
import MyPageElement from "../../components/MyPageElement/MyPageElement.component";
import { handleLogin } from "../../store/slice/userSlice";
import { expireToken } from "../../utils/aboutToken";
import { useAppDispatch, useAppSelector } from "../../hooks/index.hooks";

const MyPage = (): JSX.Element => {
  const listElement = [
    { title: "문의/버그리포트", page: "Inquiry" },
    { title: "개발정보", page: null },
    { title: "이용약관", page: null },
    { title: "후원하기", page: "Sponsor" },
    { title: "로그아웃", page: null },
  ];

  const nickname = useAppSelector((state) => state.userReducer.userNickname);

  return (
    <SafeAreaViewComp>
      <Container>
        <HeaderBar title="마이페이지" center={true}></HeaderBar>
        <Top.Container>
          <Top.NicknameWrap>
            <Top.Nickname>{nickname}</Top.Nickname>
            <SvgXml
              xml={CrownIcon}
              width="24px"
              height="24px"
              fill={theme.colors.main}
            ></SvgXml>
          </Top.NicknameWrap>
          <TouchableOpacity>
            <SvgXml
              xml={GearIcon}
              width="24px"
              height="24px"
              fill={theme.colors.fontColor1}
            ></SvgXml>
          </TouchableOpacity>
        </Top.Container>
        <Mid.Container>
          {listElement.map((item, index) => {
            return (
              <MyPageElement key={index} title={item.title}></MyPageElement>
            );
          })}
        </Mid.Container>
      </Container>
    </SafeAreaViewComp>
  );
};

export default MyPage;
