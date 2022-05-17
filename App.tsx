import React from "react";
// import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./store/store";

//import BottomNavigator from "./src/navigation/bottomNavigator";
import RootNavigator from "./src/navigation/rootStackNavigator";

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
