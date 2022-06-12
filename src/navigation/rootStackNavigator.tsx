import React, { useState } from "react";
import axios from "axios";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useAppSelector, useAppDispatch } from "../hooks/index.hooks";
import BottomNavigator from "./bottomNavigator";
import Map from "../screens/Map/map.component";
import MiddleCat from "../screens/MiddleCat/MiddleCat.component";
import LoginPage from "../screens/LoginPage/LoginPage.component";
import StoreList from "../screens/StoreList/StoreList.component";
import StorePage from "../screens/StorePage/StorePage.component";
import { TOKEN_KEY } from "../utils/aboutToken";
import { handleLogin } from "../store/slice/userSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type RootStackParamList = {
  LoginPage: undefined;
  Map: undefined;
  BottomNavigator: undefined;
  MiddleCat: undefined;
  StoreList: undefined;
  StorePage: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const url = "https://udaeri.com";
  axios.defaults.baseURL = url;

  //   dispatch(checkToken(false))
  const isLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn);
  console.log(isLoggedIn);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    if (!token) dispatch(handleLogin(false));
    else dispatch(handleLogin(true));
  };

  checkToken();

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {!isLoggedIn ? (
          <RootStack.Screen name="LoginPage" component={LoginPage} />
        ) : (
          <>
            <RootStack.Screen
              name="BottomNavigator"
              component={BottomNavigator}
            />
            <RootStack.Screen name="Map" component={Map} />
            <RootStack.Screen name="MiddleCat" component={MiddleCat} />
            <RootStack.Screen name="StoreList" component={StoreList} />
            <RootStack.Screen name="StorePage" component={StorePage} />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
