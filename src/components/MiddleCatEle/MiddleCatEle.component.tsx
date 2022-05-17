import React from "react";
import { Container, CatTitle, Thumbnail } from "../MiddleCatEle/MiddleCatEle.style";
import { LeftBlock } from "./MiddleCatEle.style";
import Icon from "react-native-vector-icons/MaterialIcons";
import { SvgXml } from "react-native-svg";
import { GoIcon } from '../../assets/icon/icons';
import theme from '../../style/theme';

interface Props {
    key : number,
    name : string,
}

const MidCatEle = ({ name } : Props) : JSX.Element => {
    return (
        <Container>
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