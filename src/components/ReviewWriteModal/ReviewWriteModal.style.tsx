import styled from "styled-components/native";
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const Modal = styled.Modal`
    /* background-color : rgba(0,0,0,0.2); */
    background-color: '#000000';
`;
export const ModalView = styled.View`
    width : ${width}px;
    height : ${height}px;
    justify-content: center;
    align-Items: center;
    padding : 20px;
    border-radius : 10px;
    background-color : white;
`;
export const BlankSpace = styled.View`
    width : ${width / 1.5}px;
    height: ${width / 2}px;
    background-color : #ffffff;
    padding: 20px;
    border-radius: 10px;
    border-color : #ff9933;
    border-width : 1px;
    margin-bottom : 20px;
`;
export const LimitText = styled.Text<{color : boolean}>`
    color : ${props => props.color ? "red" : "#888888"};
    font-size: 14px;
    justify-Content: flex-end;
    text-align: right;
`;
export const InputText = styled.TextInput`
    width: 100%;
    height: 70%;
    flex-Shrink : 1;
`;
export const SubmitBtn = styled.TouchableOpacity`
    width: ${width / 1.5}px;
    height: 40px;
    background-color: #ff9933;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;
export const SubmitText = styled.Text`
    color : white;
    font-size: 16px;
`;
export const CloseBtn = styled.TouchableOpacity`
    position: absolute;
    top : ${height / 12}px;
    left : ${width / 15}px;
`;
export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
    flex: 1;
`;