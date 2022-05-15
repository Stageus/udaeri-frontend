import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    align-items: center;
    flex-direction: row;
    justify-Content: space-between;
    margin : 10px 0;
`

export const LeftBlock = styled.View`
    flex-Direction: row;
    align-Items: center;
`

export const IconWrap = styled.View`
    background-color: #ff9933;
    width : 20px;
    height : 20px;
    align-items: center;
    justify-content: center;
    border-radius: 17px;
    margin-right: 15px;
`
export const Thumbnail = styled.View`
    background-Color: #ff9933;
    width: 32px;
    height: 32px;
    align-Items: center;
    justify-Content: center;
    border-radius: 16px;
    margin-Right: 15px;
`

export const CatTitle = styled.Text`
    font-size: 18px;
    color : black;
`