import React from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './navigation/screens/HomeScreen.js';
import NavTab from './navigation/NavTab'


const App: () => Node = () => {
  return (
    <NavigationContainer>
      <NavTab />
    </NavigationContainer>

  );
};



export default App;
