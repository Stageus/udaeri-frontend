import styled from "styled-components/native";
import theme from "../../style/theme";

export const ScrollView = styled.ScrollView``;

export const Container = styled.View``;

export const Top = {
  Container: styled.View`
    flex-direction: row;
    padding: 0 20px;
    padding-bottom: 12px;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  `,
  NicknameWrap: styled.View`
    flex-direction: row;
    align-items: center;
  `,
  Nickname: styled.Text`
    color: ${theme.colors.main};
    font-size: 20px;
    font-family: ${theme.font.Medium};
    margin-right: 10px;
  `,
};

export const Mid = {
  Container: styled.ScrollView`
    padding: 0 20px;
  `,
};
