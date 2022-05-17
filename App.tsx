import React from 'react';
// import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './src/store/store';

import BottomNavigator from './src/components/bottomNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
