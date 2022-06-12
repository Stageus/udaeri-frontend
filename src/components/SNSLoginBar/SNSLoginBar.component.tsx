import {
  KakaoOAuthToken,
  KakaoProfile,
  getProfile,
  login,
} from "@react-native-seoul/kakao-login";
import React, { useState } from "react";
import { Container, Logo, Text } from "./SNSLoginBar.style";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "../../hooks/index.hooks";
import {
  handleLogin,
  setUserNickname,
  checkSponsor,
} from "../../store/slice/userSlice";
import { saveToken } from "../../utils/aboutToken";

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

  const getKakaoProfile = async (): Promise<void> => {
    const profile = await getProfile();
    setUserId(profile.id);
    PostAccessCode();
  };

  const PostAccessCode = async () => {
    axios
      .post("/oauth", {
        id: userID,
        platform: "kakao",
      })
      .then((res) => {
        console.log("access token post 성공");
        saveToken(res.data.token);
        dispatch(handleLogin(res.data.success));

        axios.defaults.headers.common["Authorization"] = res.data.token;
        axios
          .get("/users")
          .then((res) => {
            console.log("회원정보 받아옴");
            dispatch(setUserNickname(res.data.nickname)),
              dispatch(checkSponsor(res.data.sponsor));
          })
          .catch((err) => console.log("회웑 어보 못 받아옴,", err));
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
