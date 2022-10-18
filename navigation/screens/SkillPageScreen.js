import Section from './Section.js';
import UlList from './extras/UlList.js';
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

function SkillPageScreen({navigation}){
    return(
        <View style={styles.viewContent, styles.bgColor }>
            <Section title="Programming Languages" >
                <UlList />
            </Section>
        </View>
    );
}
export default SkillPageScreen;


const styles = StyleSheet.create({

   bgColor:{
     backgroundColor: '#f2dec4',
   },
    viewContent:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center' ,
   },

 });
