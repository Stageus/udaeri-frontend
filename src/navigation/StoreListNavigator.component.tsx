import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useAppSelector } from "../../store/hooks";
import EachStoreList from "../screens/StoreList/EachStoreList/EachStoreList.component";

const Tab = createMaterialTopTabNavigator();

interface Props {
  title : string;
}

const StoreListNavi = ({title} : Props) => {

  const midCatList = useAppSelector((state) => state.categoryReducer.midCatList);
  
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
      initialRouteName={title}
      tabBarLabel={{
        focused: false,
      }}
    >
      {/* {midCatList && midCatList.map((item, index) => (
        <Tab.Screen
          name={item.name}
          children={() => (
            <EachStoreList key={item} midCat={item} />
          )}
        />
      ))} */}
        <Tab.Screen name={"안녕"} children={() => (
            <EachStoreList key={1} midCat={"한식"} />
          )}></Tab.Screen>
        <Tab.Screen name={"안녕2"} children={() => (
            <EachStoreList key={1} midCat={"한식"} />
          )}></Tab.Screen>
        <Tab.Screen name={"안녕3"} children={() => (
            <EachStoreList key={1} midCat={"한식"} />
          )}></Tab.Screen>
        <Tab.Screen name={"안녕4"} children={() => (
            <EachStoreList key={1} midCat={"한식"} />
          )}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default StoreListNavi;
