import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from './screens/HomeScreen.js';
import SkillPageScreen from './screens/SkillPageScreen.js';

const Tab = createBottomTabNavigator();
function NavTab(){
    return(
        <Tab.Navigator>

              <Tab.Screen name="About me" component={HomeScreen} />
              <Tab.Screen name="Skill Page" component={SkillPageScreen} />

            </Tab.Navigator>
    );
}
export default NavTab;