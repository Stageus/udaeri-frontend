import styled from "styled-components/native";
import theme from "../../style/theme";

export const JjimContainer = styled.TouchableOpacity`
  width: ${theme.width * 0.35}px;
  height: ${theme.width * 0.35}px;
  background-color: ${theme.colors.BGColor1}
  margin-right: 15px;
  border-radius: 20px;
  padding: 10px;
`;