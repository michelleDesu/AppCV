import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from './screens/HomeScreen.js';
import SkillPageScreen from './screens/SkillPageScreen.js';
import PersonalLetterScreen from './screens/PersonalLetterScreen.js';

const Tab = createBottomTabNavigator();
function NavTab(){
    return(
        <Tab.Navigator>

              <Tab.Screen name="About me" component={HomeScreen} />
              <Tab.Screen name="Skill Page" component={SkillPageScreen} />
              <Tab.Screen name="Personal Letter" component={PersonalLetterScreen} />

            </Tab.Navigator>
    );
}
export default NavTab;