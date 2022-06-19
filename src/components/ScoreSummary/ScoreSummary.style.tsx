import styled from "styled-components/native";
import { Dimensions } from "react-native";

const {width, height} = Dimensions.get('window');

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ScoreNumber = styled.Text`
    color : #808080;
    margin-right: 10px;
    font-size: 14px;
`;
export const ScoreFilledBar = styled.View<{ gauge : number; total : number;}>`
    width : ${props => (props.total ? (props.gauge / props.total) * (width / 3) : 0)}px;
    height : 8px;
    background-color: #ff9933;
    margin-right: 5px;
    border-radius: 15px;
    position: absolute;
`;
export const ScoreEmptyBar = styled.View`
    width : ${width / 3}px;
    height : 8px;
    background-color : #D3D3D3;
    margin-right: 5px;
    border-radius: 15px;
`;
export const TotalNum = styled.Text`
    font-size: 14px;
    color: #c0c0c0;
`;