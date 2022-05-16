import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import BottomNavigator from "./bottomNavigator";
import Map from "../screens/Map/map.component";
import MiddleCat from "../screens/MiddleCat/MiddleCat.component";
import LoginPage from "../screens/LoginPage/LoginPage.component";

export type RootStackParamList = {
  LoginPage : undefined;
  Map: undefined;
  BottomNavigator: undefined;
  MiddleCat: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator = (): JSX.Element => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {/* <RootStack.Screen name="LoginPage" component={LoginPage} /> */}
        <RootStack.Screen name="BottomNavigator" component={BottomNavigator} />
        <RootStack.Screen name="Map" component={Map} />
        <RootStack.Screen name="MiddleCat" component={MiddleCat} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
