import styled from "styled-components/native";

export const ModalBackground = styled.Pressable`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.3);
    justify-content: center;
    align-items: center;
`;
export const ModalView = styled.View`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -100px;
    margin-top: auto;
    width: 200px;
    height: auto;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.36);
`;
export const OptionTouch = styled.TouchableOpacity`
    padding: 5px;
    width: 100%;
    justify-content: center;
    align-items: center;
`;
export const OptionText = styled.Text`
    font-size: 12px;
    color: black;
`;