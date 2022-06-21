import React, { useState, useCallback, useEffect } from "react";
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
import LoadingPage from "../screens/LoadingPage/LoadingPage.component";
import { TOKEN_KEY } from "../utils/aboutToken";
import { handleLogin } from "../store/slice/userSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUserNickname, checkSponsor } from "../store/slice/userSlice";
import { getLargeCategory } from "../store/slice/categorySlice";

export type RootStackParamList = {
  LoginPage: undefined;
  Map: undefined;
  BottomNavigator: undefined;
  MiddleCat: undefined;
  StoreList: undefined;
  StorePage: undefined;
  LoadingPage: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const url = "https://udaeri.com";
  axios.defaults.baseURL = url;

  const [isLoading, setIsLoading] = useState(true);

  const isLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    if (!token) dispatch(handleLogin(false));
    else {
      axios.defaults.headers.common["Authorization"] = token;
      dispatch(handleLogin(true));
    }
  };

  useEffect(() => {
    checkToken();

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {!isLoggedIn ? (
          <RootStack.Screen name="LoginPage" component={LoginPage} />
        ) : isLoading ? (
          <RootStack.Screen name="LoadingPage" component={LoadingPage} />
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
