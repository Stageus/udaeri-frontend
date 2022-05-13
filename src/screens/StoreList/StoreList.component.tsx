
import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar.component";
import { SafeAreaViewComp } from "../../components/safeAreaViewComp/safeAreaViewComp";
import StoreListNavi from "../../navigation/StoreListNavigator.component";
import { Conatiner, StoreBlock, Content } from "./StoreList.style";

const StoreList = () : JSX.Element => {
    return (
        <SafeAreaViewComp >
            <Conatiner>
                <HeaderBar left={true} center={false} right={null} title="먹거리" />
                <Content>
                    <StoreListNavi title="뭐"> </StoreListNavi>
                </Content>
            </Conatiner>
        </SafeAreaViewComp>
    )
}

export default StoreList;