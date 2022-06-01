import React from "react";
import { Container, CatTitle, Thumbnail } from "../MiddleCatEle/MiddleCatEle.style";
import { LeftBlock } from "./MiddleCatEle.style";
import { SvgXml } from "react-native-svg";
import { GoIcon } from '../../assets/icon/icons';
import theme from '../../style/theme';
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "../../../store/hooks";
import { setCurMidCat } from "../../../store/slice/categorySlice"
interface Props {
    key : number,
    name : string,
}

const MidCatEle = ({ name } : Props) : JSX.Element => {
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    
    const onMove = () => {
        dispatch(setCurMidCat(name))
        navigation.navigate("StoreList");
    }

    return (
        <Container onPress={onMove}>
            <LeftBlock>
                <Thumbnail>

                </Thumbnail>
                <CatTitle>
                    {name}
                </CatTitle>
            </LeftBlock>
            <SvgXml 
                xml={GoIcon} 
                width="16px" 
                height="16px" 
                fill= {theme.colors.fontColor2}
            />
        </Container>
    )
}

export default MidCatEle;