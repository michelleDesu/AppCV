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
import { observer } from "mobx-react";

import HomeScreen from './navigation/screens/HomeScreen.js';
import NavTab from './navigation/NavTab';
import Login from './navigation/screens/Login';
import {getLoginStore} from './models/login/LoginStore.js';

const store = getLoginStore();

const App: () => Node = () => {
  return (
    <>
        <NavigationContainer>
            {store.loggedIn  ? <NavTab/> : <Login  /> }
        </NavigationContainer>
    </>
  );
};



export default observer(App);
