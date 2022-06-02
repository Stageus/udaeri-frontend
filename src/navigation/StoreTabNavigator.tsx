import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import StoreInfoTab from '../screens/StorePage/StoreInfoTab/StoreInfoTab.component';
import StoreMenuTab from '../screens/StorePage/StoreMenuTab/StoreMenuTab.component';
import StoreReviewTab from '../Screens/StorePage/StoreReviewTab/StoreReviewTab.component';

const Tab = createMaterialTopTabNavigator();

const StoreTapNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            labelStyle: {
                fontSize: 16,
            },
            indicatorStyle: {
                borderColor: '#ff9933',
                borderWidth: 2
            }
        }}>
            <Tab.Screen name="정보" component={StoreInfoTab} />
            <Tab.Screen name="메뉴" component={StoreMenuTab} />
            <Tab.Screen name="리뷰" component={StoreMenuTab} />
        </Tab.Navigator>
    );
}

export default StoreTapNavigator;
