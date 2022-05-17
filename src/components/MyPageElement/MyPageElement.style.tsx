import styled from "styled-components/native";
import theme from "../../style/theme";

export const ElementContainer = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-color: ${theme.colors.lineColor2};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;

export const ElementText = styled.Text`
  font-size: 16px;
`;
