import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Provider, observer } from "mobx-react";
import { View, TextInput, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { Header, ListItem, Text, Button } from 'react-native-elements';

import HomeScreen from './screens/HomeScreen.js';
import SkillPageScreen from './screens/SkillPageScreen.js';
import PersonalLetterScreen from './screens/PersonalLetterScreen.js';
import {getLoginStore} from './../models/login/LoginStore.js';

const store = getLoginStore();
const Tab = createBottomTabNavigator();

function NavTab(){
    return(
    <>
        <View style={styles.buttonrow}>

             <Button style={styles.button}
                 title="Log out"
                 onPress={store.logout}
             />
             <Text style={styles.text}> {store.userName}  </Text>
        </View>
        <Tab.Navigator>
            <Tab.Screen name="About me" component={HomeScreen} />
            <Tab.Screen name="Skill Page" component={SkillPageScreen} />
            <Tab.Screen name="Personal Letter" component={PersonalLetterScreen} />
        </Tab.Navigator>
    </>
    );
}
export default observer(NavTab);

const styles = StyleSheet.create({
     SafeAreaViewcontainer: { flex: 1, width: '100%' },
     button: {
        position: 'absolute',
                        right: 5,
                        top: 5,
     },

     buttonrow: {
         flexDirection: 'row'
     },
     text: {
         position: 'absolute',
                right: 5,
                top: 5,
                fontSize: 20,
                fontWeight: "bold"
     },
 });