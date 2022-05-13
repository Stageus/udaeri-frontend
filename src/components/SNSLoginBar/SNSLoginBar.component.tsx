import React from "react";
import { Container, Logo, Text } from "./SNSLoginBar.style";
import { useNavigation } from "@react-navigation/native";

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
    const navigation = useNavigation();

    return (
      <Container color={logoData[id].color}
        onPress = {() => {
            navigation.navigate(moveScreen)
        }}>
        <Logo source={logoData[id].src} />
        <Text id={id}>{logoData[id].text}</Text>
      </Container>
    )
  };

  export default SNSLoginBar;