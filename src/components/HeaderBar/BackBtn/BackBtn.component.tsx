import React from 'react';
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import { BackIcon } from '../../../assets/icon/icons';
import theme from '../../../style/theme';

export type ProfileScreenNavigationProp = {
    pop : () => void;
};
const BackBtn = () => {
    const navigation = useNavigation<ProfileScreenNavigationProp>();
    const onGoBack = () => {
      navigation.pop();
    };
    return (
        <SvgXml 
            xml={BackIcon} 
            width="24px" 
            height="24px" 
            fill= {theme.colors.fontColor2}
            onPress={onGoBack}
        />
    )
}

export default BackBtn;
