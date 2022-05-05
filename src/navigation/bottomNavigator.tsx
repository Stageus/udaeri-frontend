import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import theme from '../style/theme';
import Home from '../screens/home/home.component';
import Search from '../screens/Search/search.component';
import Jjim from '../screens/Jjim/jjim.component';
import MyPage from '../screens/MyPage/my-page.component';

import type { RouteProp, ParamListBase } from '@react-navigation/native';

import { HomeIcon, HeartIcon, SearchIcon, UserIcon } from '../assets/icon/icons';
import { SvgXml } from 'react-native-svg';

const Tab = createBottomTabNavigator();

interface TabBarIconProps {
  focused: boolean;
}

const screenOptions = ({ route }: { route: RouteProp<ParamListBase, string> }) => {
  return {
    headerShown: false,
    tabBarIcon: ({ focused }: TabBarIconProps) => {
      const { name } = route;
      const mainColor = theme.colors.main;
      const focusedColor = focused ? mainColor : 'black';
      switch (name) {
        case 'Home':
          return <SvgXml xml={HomeIcon} width="25px" height="25px" fill={focusedColor} />;
        case 'Search':
          return <SvgXml xml={SearchIcon} width="25px" height="25px" fill={focusedColor} />;
        case 'Jjim':
          return <SvgXml xml={HeartIcon} width="25px" height="25px" fill={focusedColor} />;
        case 'MyPage':
          return <SvgXml xml={UserIcon} width="25px" height="25px" fill={focusedColor} />;
      }
    },
  };
};

const BottomNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={Home} options={{ tabBarShowLabel: false }} />
      <Tab.Screen name="Search" component={Search} options={{ tabBarShowLabel: false }} />
      <Tab.Screen name="Jjim" component={Jjim} options={{ tabBarShowLabel: false }} />
      <Tab.Screen name="MyPage" component={MyPage} options={{ tabBarShowLabel: false }} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
