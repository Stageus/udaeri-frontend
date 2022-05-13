import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();

const StoreListNavi = (props) => {

    const MidCatList = {

    }

  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 14,
          fontFamily: "Medium",
        },
        indicatorStyle: {
          borderColor: "#ff9933",
          borderWidth: 1,
        },
        scrollEnabled: true,
        tabStyle: {
          width: 90,
        },
        activeTintColor: "#ff9933",
        inactiveTintColor: "gray",
      }}
      initialRouteName={props.title}
      tabBarLabel={{
        focused: false,
      }}
    >
      {MidCatList.map((item, index) => (
        <Tab.Screen
          name={item}
          children={() => (
            <Store key={item} midCat={item} navigation={props.navigation} />
          )}
        />
      ))}
    </Tab.Navigator>
  );
};

export default StoreListNavi;
