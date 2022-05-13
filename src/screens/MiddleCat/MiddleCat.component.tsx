import React from "react";
import { SafeAreaViewComp } from "../../components/safeAreaViewComp/safeAreaViewComp";
import HeaderBar from "../../components/HeaderBar/HeaderBar.component";
import { View, ScrollView } from "react-native";
import { MainContainer } from "./MiddleCat.style";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MidCatEle from "../../components/MiddleCatEle/MiddleCatEle.component"

const midCatList = [
    {
        name : "한식"
    },
    {
        name : "중식"
    },
    {
        name : "일식"
    },
    {
        name : "양식"
    },
    {
        name : "분식"
    },
    {
        name : "치킨"
    },
]

const MiddleCat = ({ route }) : JSX.Element => {
    return (
        <SafeAreaViewComp>
            <View>
                <HeaderBar title={route.params.catName} left={true} center={false} right={null} ></HeaderBar>
                <MainContainer>
                    <ScrollView>
                        {
                            midCatList.map((item, index) => {
                                return (
                                    <MidCatEle 
                                        key={index}
                                        name={item.name}
                                    />
                                )
                            })
                        }
                    </ScrollView>
                </MainContainer>
            </View>
        </SafeAreaViewComp>
    )
}

export default MiddleCat;