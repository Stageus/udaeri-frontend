import styled from "styled-components/native";
import theme from "../../style/theme";

export const JjimEmptyContainer = styled.View`
  display: flex;
  align-items: center;
  margin-top: 200px;
`;

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding: 20px;
  border-bottom-color: ${theme.colors.lineColor2};
  border-bottom-width: 1px;
  align-items: center;
  height: 100px;
`;

export const StoreThumbnail = styled.View`
  background-color: ${theme.colors.main};
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-right: 20px;
`;

export const ContentContainer = styled.View``;
export const StoreName = styled.Text`
  font-size: 18px;
`;
export const Content = styled.Text`
  font-size: 16px;
`;
export const Wrap = styled.View`
  flex-direction: row;
  align-content: center;
  align-items: center;
`;
export const Location = styled.Text`
  margin-right: 5px;
  font-size: 15px;
`;
export const Distance = styled.Text`
  margin-right: 5px;
  font-size: 15px;
`;
export const Likes = styled.Text`
  font-size: 15px;
`;
