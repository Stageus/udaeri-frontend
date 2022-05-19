import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ElementContainer, ElementText } from "./MyPageElement.style";

const MyPageElement = (props): JSX.Element => {
  const { title } = props;
  return (
    <ElementContainer>
      <ElementText>{title}</ElementText>
    </ElementContainer>
  );
};

export default MyPageElement;
