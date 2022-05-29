import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { HomeNavigator } from './src/navigator/HomeNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <HomeNavigator/>
    </NavigationContainer>
  );
};

export default App;