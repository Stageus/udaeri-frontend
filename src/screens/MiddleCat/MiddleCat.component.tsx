import React from "react";
import { SafeAreaViewComp } from "../../components/safeAreaViewComp/safeAreaViewComp";
import HeaderBar from "../../components/HeaderBar/HeaderBar.component";
import { View, ScrollView } from "react-native";
import { MainContainer } from "./MiddleCat.style";
const MiddleCat = () : JSX.Element => {

    return (
        <SafeAreaViewComp>
            <View>
                <MainContainer>
                    <ScrollView>
                        
                    </ScrollView>
                </MainContainer>
            </View>
        </SafeAreaViewComp>
    )
}

export default MiddleCat;