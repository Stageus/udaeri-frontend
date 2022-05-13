import React from "react";
import { Container, CatTitle, Thumbnail } from "../MiddleCatEle/MiddleCatEle.style";
import { LeftBlock } from "./MiddleCatEle.style";
import Icon from "react-native-vector-icons/MaterialIcons";

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
            <Icon name="arrow-forward-ios" size={12} color="gray" />
        </Container>
    )
}

export default MidCatEle;