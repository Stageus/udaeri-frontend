import React, { useRef, useEffect } from "react";
import { Animated, Text, View } from "react-native";

import { ToastMessageContainer, ToastMessageText } from "./ToastMessage.style";

const ToastMessage = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  return (
    <ToastMessageContainer
      style={{
        opacity: fadeAnim,
      }}
    >
      <ToastMessageText>검색 결과가 없습니다.</ToastMessageText>
    </ToastMessageContainer>
  );
};

export default ToastMessage;
