import styled from "styled-components/native";
import theme from "../../style/theme";

export const Container = styled.TouchableOpacity`
    flex-Direction: row;
    padding: 20px;
    border-Bottom-Color: ${theme.colors.lineColor2};
    border-Bottom-Width: 1px;
    align-Items: center;
    height: 100px;
`

export const StoreThumbnail = styled.View`
    background-Color: ${theme.colors.main};
    width: 20px;
    height: 20px;
    align-Items: center;
    justify-Content: center;
    border-Radius: 10px;
    margin-Right: 20px;
`

export const ContentContainer = styled.View`
`
export const StoreName = styled.Text`
    font-Size: 18px;
`
export const Content = styled.Text`
    font-Size: 16px;
`
export const Wrap = styled.View`
    flex-direction: row;
    align-content:  center;
    align-items: center;
`
export const Location = styled.Text`
    margin-right: 5px;
    font-Size: 15px;
`
export const Distance = styled.Text`
    margin-right: 5px;
    font-Size: 15px;
`
export const Likes = styled.Text`
    font-Size: 15px;
`