import styled from "styled-components/native";

export const ReviewWrap = styled.TouchableHighlight< { isMyReview : boolean } >`
    margin: 10px;
    border-radius: 10px;
    border-width: ${(props) => props.isMyReview ? 1 : 0}px;
    border-color: ${(props) => props.isMyReview ? "#ff9933" : "rgba(0,0,0,0)"};
`;
export const Container = styled.View`
    background-color: white;
    flex-Direction: row;
    justify-Content: space-between;
    padding: 20px;
    border-radius: 10px;
`;
export const LeftWrap = styled.View`
    align-items:flex-start;
`;
export const Nickname = styled.Text`
    font-size: 16px;
`;
export const Content = styled.Text`
    margin-top: 10px;
    font-size: 14px;
`;
export const Date = styled.Text`
    font-family: Light;
    font-size: 10px;
    color: gray;
`;
export const Modal = styled.Modal`
        
`;
export const ModalBackground = styled.Pressable `
    flex: 1;
    background-color : rgba(0,0,0,0.3);
    justify-content: center;
    align-items: center;
`;
export const ModalView = styled.View`
    position : absolute;
    top: 50%;
    left: 50%;
    margin-left: -100px;
    margin-top: auto;
    width : 200px;
    height : auto;
    justify-Content: center;
    align-Items: center;
    padding : 20px;
    border-radius : 10px;
    background-color : white;
    box-shadow: 0px 0px 2px rgba(0,0,0,0.36);
`;
export const OptionTouch = styled.TouchableOpacity`
    padding: 5px;
    width: 100%;
    justify-Content: center;
    align-Items: center;
`;
export const OptionText = styled.Text`
    font-size: 12px;
    color: black;
`;