import React from 'react';
import Icon from "react-native-vector-icons/Ionicons";

interface Props {
    jjimState : boolean;
    title : string;
}
const HeartBtn = ({jjimState, title} : Props) => {
    return (
        <Icon
            name="heart-circle-sharp"
            size={24}
            color={jjimState ? "red" : "gray"}
            onPress={() => {}}
        />
    )
}

export default HeartBtn;
