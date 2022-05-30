import {
  KakaoOAuthToken,
  KakaoProfile,
  getProfile,
  login,
} from "@react-native-seoul/kakao-login";
import React, { useState } from "react";
import { Container, Logo, Text } from "./SNSLoginBar.style";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { checkToken } from "../../../store/slice/userSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const logoData = {
  kakao: {
    color: "#FEE500",
    src: require("../../assets/logo/kakaologo.png"),
    text: "카카오로 시작하기",
  },
  naver: {
    color: "#03C75A",
    src: require("../../assets/logo/naverlogo.png"),
    text: "네이버로 시작하기",
  },
};

interface Props {
  id: "nothing" | "kakao" | "naver";
  moveScreen: string;
}

const SNSLoginBar = ({ id, moveScreen }: Props) => {
  const dispatch = useAppDispatch();

  const [accessToken, setAccessToken] = useState<string>("");
  const [userID, setUserId] = useState<string>("");

  const signInWithKakao = async (): Promise<void> => {
    const token: KakaoOAuthToken = await login();
    getKakaoProfile();
  };

  const TOKEN_KEY = "@userKey";

  const saveToken = async (token: string) => {
    await AsyncStorage.setItem(TOKEN_KEY, token);
  };

  const getKakaoProfile = async (): Promise<void> => {
    console.log("Gg");
    const profile = await getProfile();
    setUserId(profile.id);
    PostAccessCode();
  };

  const PostAccessCode = async () => {
    await axios
      .post("/oauth", {
        id: userID,
        platform: "kakao",
      })
      .then((res) => {
        console.log("access token post 성공");
        saveToken(res.data.token);
        dispatch(checkToken(res.data.success));
      })
      .catch((err) => {
        console.log("server로 access code post 실패");
        console.log(err);
      });
  };

  return (
    <Container color={logoData[id].color} onPress={() => signInWithKakao()}>
      <Logo source={logoData[id].src} />
      <Text id={id}>{logoData[id].text}</Text>
    </Container>
  );
};

export default SNSLoginBar;
