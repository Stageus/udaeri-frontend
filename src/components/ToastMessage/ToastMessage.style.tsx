import styled, { css } from "styled-components/native";
import theme from "../../style/theme";
import { Animated } from "react-native";

export const ToastMessageContainer = styled(Animated.View)`
z-index: 5
position: absolute;
bottom: 15%;
left: 5%;
background-color: ${theme.colors.main}
width: 90%;
border-radius: 10px;
padding: 20px;
opacity: 0.95
`;

export const ToastMessageText = styled.Text`
  color: #fff;
  font-size: 16px;
`;
