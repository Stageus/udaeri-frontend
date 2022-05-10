import styled from "styled-components/native";
import theme from "../../style/theme";

export const HomeText = styled.Text`
  font-size: 30px;
`;

export const HomeContainer = styled.View`
  padding: 0 20px;
`;

export const TopContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  // margin-top: 10px;
`;

interface TopTitleProp {
  readonly main?: boolean;
}

export const TopTitle = styled.Text<TopTitleProp>`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => (props.main ? theme.colors.main : "#000")};
`;
