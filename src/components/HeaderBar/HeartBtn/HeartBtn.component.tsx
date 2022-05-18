import React from "react";
import { SvgXml } from "react-native-svg";
import { HeartIcon } from "../../../assets/icon/icons";
import theme from "../../../style/theme";

interface Props {
  jjimState: boolean;
  title: string;
}
const HeartBtn = ({ jjimState, title }: Props) => {
  return (
    <SvgXml
      xml={HeartIcon}
      width="24px"
      height="24px"
      fill={theme.colors.fontColor2}
    />
  );
};

export default HeartBtn;
