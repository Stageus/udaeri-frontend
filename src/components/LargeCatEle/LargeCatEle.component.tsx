import React, { useCallback } from "react";
import { 
    Container,
    Thumbnail,
    CatTitle,
 } from "./LatgeCatEle.style";
 
import { SvgXml } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import MiddleCat from "../../screens/MiddleCat/MiddleCat.component";

interface Props {
    key : number,
    name : string,
    icon : string,
}


const LargeCatEle = ({name, icon} : Props) : JSX.Element => {
    const navigation = useNavigation();
    const onMove = () => {
        navigation.navigate("MiddleCat", { catName: name });
    }
    return (
        <Container onPress={onMove}>
            <Thumbnail>
            <SvgXml
                xml={icon} 
                width="24px" 
                height="24px" 
                fill= "#ffffff" 
            />
            </Thumbnail>
            <CatTitle>
                {name}
            </CatTitle>
        </Container>
    )
} 

export default LargeCatEle