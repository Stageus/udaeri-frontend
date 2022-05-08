import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import theme from "../style/theme";
import Home from "../screens/home/home.component";
import Search from "../screens/Search/search.component";
import Jjim from "../screens/Jjim/jjim.component";
import MyPage from "../screens/MyPage/my-page.component";

import type { RouteProp, ParamListBase } from "@react-navigation/native";

// import {
//   HomeIcon,
//   HeartIcon,
//   SearchIcon,
//   UserIcon,
// } from "../assets/icon/icons";
import { SvgXml } from "react-native-svg";

import HomeIcon from "react-native-vector-icons/Feather";
import SearchIcon from "react-native-vector-icons/AntDesign";
import HeartIcon from "react-native-vector-icons/AntDesign";
import UserIcon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

interface TabBarIconProps {
  focused: boolean;
}

const screenOptions = ({
  route,
}: {
  route: RouteProp<ParamListBase, string>;
}) => {
  return {
    headerShown: false,
    tabBarIcon: ({ focused }: TabBarIconProps) => {
      const { name } = route;
      const mainColor = theme.colors.main;
      const focusedColor = focused ? mainColor : "black";
      switch (name) {
        case "Home":
          return <HomeIcon name="home" size={32} color={focusedColor} />;
        case "Search":
          return <SearchIcon name="search1" size={32} color={focusedColor} />;
        case "Jjim":
          return <HeartIcon name="hearto" size={32} color={focusedColor} />;
        case "MyPage":
          return <UserIcon name="user-o" size={32} color={focusedColor} />;
      }
    },
  };
};

const BottomNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{ tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="Jjim"
        component={Jjim}
        options={{ tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPage}
        options={{ tabBarShowLabel: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
