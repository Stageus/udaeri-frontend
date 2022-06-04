import React from "react";
import { StoreInfoText, StoreInfoTitle, StoreInfoWrap } from './StoreInfoEle.style'
interface Props {
    infoTitle : string;
    infoContent : string;
}
const StoreInfoEle = ({infoTitle, infoContent} : Props) => {
    return (
        <StoreInfoWrap>
            <StoreInfoTitle>{infoTitle}</StoreInfoTitle>
            <StoreInfoText>{infoContent}</StoreInfoText>
        </StoreInfoWrap>
    )
}

export default StoreInfoEle