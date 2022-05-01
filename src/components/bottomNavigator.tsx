import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/home/home.component';
import ReduxToolkitEx from '../screens/redux-toolkit-ex';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        // options={{tabBarShowLabel: false}}
      />
      <Tab.Screen
        name="ReduxToolkitEx"
        component={ReduxToolkitEx}
        // options={{tabBarShowLabel: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
