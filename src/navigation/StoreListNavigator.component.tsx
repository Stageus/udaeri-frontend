import React, { useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import EachStoreList from "../screens/StoreList/EachStoreList/EachStoreList.component";
import axios from "axios";
import { setStoreList } from "../../store/slice/categorySlice";
const Tab = createMaterialTopTabNavigator();

interface Props {
  title : string;
}

interface Item {
  name : string;
}

const StoreListNavi = ({ title } : Props) => {
  const dispatch = useAppDispatch();
  const midCatList = useAppSelector((state) => state.categoryReducer.midCatList);
  const curLargeCat = useAppSelector((state) => state.categoryReducer.curLargeCat)

  const getStore = async () => {
    await axios
      .get("/l-categories/" + curLargeCat + "/m-categories/all/stores/")
      .then((res) => {
        dispatch(setStoreList(res.data))
      })
      .catch((err) => {
        console.log("error");
        console.log(err);
      });
  }

  useEffect(() => {
    getStore();
  }, [])

  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 14,
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
      {midCatList && midCatList.map((item, index) => (
        <Tab.Screen
          name={item.name}
          children={() => (
            <EachStoreList key={index} midCat={item} />
          )}
        />
      ))}
    </Tab.Navigator>
  );
};

export default StoreListNavi;
