import React, { useEffect } from "react";
import axios from "axios";
import { useAppSelector } from "../../../store/hooks";
import { SafeAreaViewComp } from "../../components/safeAreaViewComp/safeAreaViewComp";
import HeaderBar from "../../components/HeaderBar/HeaderBar.component";
import { Container, Content } from "./StorePage.style";
import StoreTapNavigator from "../../navigation/StoreTabNavigator";

const StorePage = () : JSX.Element => {
    const curStore = useAppSelector((state) => state.curStateReducer.curStore)
    return (
        <SafeAreaViewComp>
            <Container>
                <HeaderBar
                    left={true}
                    title={curStore}
                    center={false}
                >

                </HeaderBar>
                <Content>
                    <StoreTapNavigator />
                </Content>
            </Container>
            
        </SafeAreaViewComp>
    )
}

export default StorePage;