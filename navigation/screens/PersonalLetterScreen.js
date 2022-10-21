import Section from './Section.js';
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

import TextParagraph from './extras/TextParagraph.js';

function PersonalLetterScreen({navigation}){
    const personalLetter = require('./extras/personalLetter.json');

    return(
        <SafeAreaView style={styles.SafeAreaViewcontainer}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.viewContent, styles.bgColor }>
                        <TextParagraph config={personalLetter.personalLetter} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default PersonalLetterScreen;

const styles = StyleSheet.create({
     SafeAreaViewcontainer: { flex: 1, width: '100%' },
  scrollView: {
    backgroundColor: '#f2dec4',
  },

});