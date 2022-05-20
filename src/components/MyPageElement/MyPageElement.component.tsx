import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ElementContainer, ElementText } from "./MyPageElement.style";

import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { checkToken } from "../../../store/slice/userSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";


import {
  getProfile as getKakaoProfile,
  logout,
} from '@react-native-seoul/kakao-login';

const MyPageElement = (props): JSX.Element => {
  const { title } = props;
  const dispatch = useAppDispatch();

  const TOKEN_KEY = "@userKey";
  
  const tokenExpire = () => {
    AsyncStorage.removeItem(TOKEN_KEY);
    dispatch(checkToken(false));
  };

  const signOutWithKakao = async (): Promise<void> => {
    const message = await logout();
    tokenExpire();
  };

  return (
    <ElementContainer onPress={() => signOutWithKakao()}>
      <ElementText>{title}</ElementText>
    </ElementContainer>
  );
};

export default MyPageElement;
