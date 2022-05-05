import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import BottomNavigator from "./bottomNavigator";
import Map from "../screens/Map/map.component";

export type RootStackParamList = {
  Map: undefined;
  BottomNavigator: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator = (): JSX.Element => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="BottomNavigator" component={BottomNavigator} />
        <RootStack.Screen name="Map" component={Map} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
