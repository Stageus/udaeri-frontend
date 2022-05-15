import React from 'react';
import Icon from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

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
        <Icon
          name="magnifying-glass"
          size={size}
          color="gray"
          onPress={() =>
            title === "지도"
              ? navigation.navigate("MapSearch")
              : navigation.navigate("RecentSearch")
          }
        />
    )
}

export default MagniBtn;
