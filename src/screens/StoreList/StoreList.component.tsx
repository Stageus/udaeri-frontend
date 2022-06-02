
import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar.component";
import { SafeAreaViewComp } from "../../components/safeAreaViewComp/safeAreaViewComp";
import StoreListNavi from "../../navigation/StoreListNavigator.component";
import { Conatiner, StoreBlock, Content } from "./StoreList.style";
import { useAppSelector } from "../../../store/hooks";
const StoreList = () : JSX.Element => {

    const curMidCat = useAppSelector((state) => state.categoryReducer.curMidCat)

    return (
        <SafeAreaViewComp >
            <Conatiner>
                <HeaderBar left={true} center={false} right={null} title="먹거리" />
                <Content>
                    <StoreListNavi title={curMidCat}> </StoreListNavi>
                </Content>
            </Conatiner>
        </SafeAreaViewComp>
    )
}

export default StoreList;