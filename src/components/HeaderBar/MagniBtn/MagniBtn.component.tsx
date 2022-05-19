import React from 'react';
import { SvgXml } from "react-native-svg";
import { MagniIcon } from '../../../assets/icon/icons';
import { useNavigation } from "@react-navigation/native";
import theme from '../../../style/theme';

export type ProfileScreenNavigationProp = {
    pop : () => void;
    navigate: (string) => void;
};

interface Props {
    title : "지도" | null;
    size : number
}

const MagniBtn = ({title, size = 24} : Props) => {
    const navigation = useNavigation<ProfileScreenNavigationProp>();
    return (
        <SvgXml 
            xml={MagniIcon} 
            width="24px" 
            height="24px" 
            fill= {theme.colors.fontColor2} 
            onPress={() =>
                title === "지도"
                    ? navigation.navigate("MapSearch")
                    : navigation.navigate("RecentSearch")
            }
        />
    )
}

export default MagniBtn;
