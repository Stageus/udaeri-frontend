import React from "react";
import { SvgXml } from "react-native-svg";
import { HeartIcon } from "../../../assets/icon/icons";
import theme from "../../../style/theme";

interface Props {
  jjimState: boolean;
  title: string;
  onPress: () => void;
}
const HeartBtn = ({ jjimState, title, onPress }: Props) => {
  return (
    <SvgXml
      xml={HeartIcon}
      width="24px"
      height="24px"
      fill={jjimState ? theme.colors.main : theme.colors.fontColor2}
      onPress={onPress}
    />
  );
};

export default HeartBtn;
