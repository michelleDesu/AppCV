import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Provider, observer } from "mobx-react";
import { View, TextInput, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { Header, ListItem, Text, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './screens/HomeScreen.js';
import SkillPageScreen from './screens/SkillPageScreen.js';
import PersonalLetterScreen from './screens/PersonalLetterScreen.js';
import {getLoginStore} from './../models/login/LoginStore.js';

import CustomButton from './screens/extras/CustomButton.js'

const store = getLoginStore();
const Tab = createBottomTabNavigator();

function NavTab(){
    return(
    <>
        <View style={styles.buttonrow}>
             <Text style={styles.text}> {store.userName}  </Text>
               <CustomButton
                    title = "Logout"
                    onPress={store.logout}
                />


        </View>
        <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerStyle: { backgroundColor: '#3f4042',},
                    headerTintColor: '#f2dec4',
                    headerTitleStyle: {
                    fontWeight: 'bold',
                    },
                    headerTitleAlign: 'center',
                    tabBarStyle: {
                              backgroundColor: '#3f4042',
                            },
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "About me") {
                      iconName = focused
                        ? 'account-heart'
                        : 'account';
                    } else if (route.name === 'Skill Page') {
                      iconName = focused ? 'briefcase-check' : 'briefcase';
                    }
                    else if (route.name === "Personal Letter") {
                      iconName = focused ? 'email-open' : 'email';
                    }
                    return <Icon name={iconName} size={size} color={color} />;
                  },
                  tabBarActiveTintColor: 'tomato',
                  tabBarInactiveTintColor: 'gray',
                })}
              >
            <Tab.Screen name="About me" component={HomeScreen}  />
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

        right: 5,
        top: 5,
     },

     buttonrow: {
         flexDirection: 'row',
         justifyContent: 'flex-end',
         display: "flex",
         backgroundColor: '#3f4042'

     },
     text: {
                right: 5,
                top: 5,
                fontSize: 20,
                fontWeight: "bold",
                color: "pink"
     },
     screenStyle: {
        backgroundColor: '#3f4042',
     }
 });

