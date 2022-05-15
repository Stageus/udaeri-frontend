import React from 'react';
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export type ProfileScreenNavigationProp = {
    pop : () => void;
};
const BackBtn = () => {
    const navigation = useNavigation<ProfileScreenNavigationProp>();
    const onGoBack = () => {
      navigation.pop();
    };
    return (
        <Icon name="arrow-back" size={24} color="gray" onPress={onGoBack}>
        </Icon>
    )
}

export default BackBtn;
