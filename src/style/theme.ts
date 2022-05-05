import { DefaultTheme } from "styled-components";
import { Dimensions } from "react-native";

const theme: DefaultTheme = {
  borderRadius: "5px",

  colors: {
    main: "#ffaa56",
    BGColor1: "#F1F1F5",
    BGColor2: "#F8F8FA",
    fontColor1: "#191919",
    fontColor2: "#767676",
    fontColor3: "#999999",
    lineColor1: "#191919",
    lineColor2: "#D3D3D3",
    lineColor3: "#EDEDED",
  },

  width: Dimensions.get("window").width,
};

export default theme;
