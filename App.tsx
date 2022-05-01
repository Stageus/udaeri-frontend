import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import BottomNavigator from './src/components/bottomNavigator';
import Home from './src/screens/home/home.component';
import ReduxToolkitEx from './src/screens/redux-toolkit-ex';

const Stack = createStackNavigator();

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
