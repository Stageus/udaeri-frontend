<<<<<<< HEAD
import React from 'react';
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export type ProfileScreenNavigationProp = {
    pop : () => void;
};
const BackBtn = () => {
    const navigation = useNavigation<ProfileScreenNavigationProp>();
    const onGoBack = () => {
      navigation.pop();
    };
    return (
        <Icon name="arrow-back" size={24} color="gray" onPress={onGoBack}>
        </Icon>
    )
}
=======
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import { BackIcon } from "../../../assets/icon/icons";
import theme from "../../../style/theme";

export type ProfileScreenNavigationProp = {
  pop: () => void;
};
const BackBtn = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const onGoBack = () => {
    navigation.pop();
  };
  return (
    <SvgXml
      xml={BackIcon}
      width="24px"
      height="24px"
      fill={theme.colors.fontColor2}
      onPress={onGoBack}
    />
  );
};
>>>>>>> stageus/develop

export default BackBtn;
