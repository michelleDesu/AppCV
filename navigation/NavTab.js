import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen.js';

const Tab = createBottomTabNavigator();
function NavTab(){
    return(
        <Tab.Navigator>

              <Tab.Screen name="About me" component={HomeScreen} />
            </Tab.Navigator>
    );
}
export default NavTab;