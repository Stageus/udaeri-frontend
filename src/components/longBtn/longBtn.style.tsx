import styled from "styled-components/native";
import theme from "../../style/theme";

export const LongBtnContainer = styled.TouchableOpacity`
  background-color: ${theme.colors.main};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  width: ${theme.width - 40};
  height: 40px;
  margin: 20px;
`;

export const LongBtnTitle = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;
