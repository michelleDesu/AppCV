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
    const skills = require('./extras/skills.json');
    const ideTools = require('./extras/ideTools.json');

    return(
        <SafeAreaView style={styles.SafeAreaViewcontainer}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.viewContent, styles.bgColor }>
                    <Section title='Programming Languages' >
                        <UlList config={skills.skill} />
                    </Section>
                    <Section title='IDE/Tools' >
                        <UlList config={ideTools.ideTools} />
                    </Section>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default SkillPageScreen;


const styles = StyleSheet.create({
   SafeAreaViewcontainer: { flex: 1, width: '100%' },

   bgColor:{
     backgroundColor: '#f2dec4',
   },
    viewContent:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center' ,
   },
    scrollView: {
           backgroundColor: '#f2dec4',
         },

 });
