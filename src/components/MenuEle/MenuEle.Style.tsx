import styled from "styled-components/native";

export const MenuEleWrap = styled.View`
    flex-Direction: row;
    align-Items: center;
    justify-Content: space-between;
    border-Style: solid;
    border-bottom-width : 1px;
    border-bottom-color: #d3d3d3;
    padding: 20px;
`;
export const ContentWrap = styled.View`
`;

export const MenuName = styled.Text`
    font-Family: Medium;
    font-Size: 18px;
`;

export const MenuDes = styled.Text`
    font-Family: Medium;
    font-Size: 16px;
`;
export const MenuPrice = styled.Text`
    font-Family: Light;
    font-Size: 14px;
`
export const MenuThumbnail = styled.View`
    background-Color: #ff9933;
    width: 40px;
    height: 40px;
    align-Items: center;
    justify-Content: center;
    border-Radius: 20px;
`;