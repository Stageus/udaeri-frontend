import React, { useCallback } from "react";
import { 
    Container,
    Thumbnail,
    CatTitle,
 } from "./LatgeCatEle.style";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons"
import Icon2 from "react-native-vector-icons/Ionicons"
import Icon3 from "react-native-vector-icons/FontAwesome5"
import Icon4 from "react-native-vector-icons/Entypo"
import { useNavigation } from "@react-navigation/native";
import MiddleCat from "../../screens/MiddleCat/MiddleCat.component";

interface Props {
    key : number,
    name : string,
}


const LargeCatEle = ({name} : Props) : JSX.Element => {
    const navigation = useNavigation();
    const onMove = () => {
        navigation.navigate("MiddleCat", { catName: name });
    }
    return (
        <Container onPress={onMove}>
            <Thumbnail>
                {
                    name === "먹거리" ? (
                        <Icon1 name="rice" size={24} color="white"></Icon1>
                    ) : name === "술집" ? (
                        <Icon2 name="ios-beer" size={24} color="white"></Icon2>      
                    ) : name === "카페/빵집" ? (
                        <Icon2 name="ios-cafe" size={24} color="white"></Icon2>      
                    ) : name === "놀거리" ? (
                        <Icon2 name="game-controller" size={24} color="white"></Icon2>  
                    ) : name === "병원" ? (
                        <Icon3 name="hospital" size={24} color="white"></Icon3>
                    ) : name === "미용실" ? (
                        <Icon4 name="scissors" size={24} color="white"></Icon4>
                    ) : name === "상점" ? (
                        <Icon1 name="storefront" size={24} color="white"></Icon1>
                    ) : name === "서비스" ? (
                        <Icon1 name="hand-extended" size={24} color="white"></Icon1>
                    ) : null
                }
            </Thumbnail>
            <CatTitle>
                {name}
            </CatTitle>
        </Container>
    )
} 

export default LargeCatEle