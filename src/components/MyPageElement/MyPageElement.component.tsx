import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ElementContainer, ElementText } from "./MyPageElement.style";
import { useAppSelector, useAppDispatch } from "../../hooks/index.hooks";
import { handleLogin } from "../../store/slice/userSlice";
import { expireToken } from "../../utils/aboutToken";
import { logout } from "@react-native-seoul/kakao-login";

const MyPageElement = (props): JSX.Element => {
  const dispatch = useAppDispatch();
  const { title } = props;

  const signOutWithKakao = async (): Promise<void> => {
    expireToken();
    dispatch(handleLogin(false));
    const message = await logout();
  };

  const handleOnPress = () => {
    if (props.title === "로그아웃") {
      signOutWithKakao();
    }
  };

  return (
    <ElementContainer onPress={handleOnPress}>
      <ElementText>{title}</ElementText>
    </ElementContainer>
  );
};

export default MyPageElement;
