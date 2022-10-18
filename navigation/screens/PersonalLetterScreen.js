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

function PersonalLetterScreen({navigation}){
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return(
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor}/>
            <View style={{ backgroundColor: isDarkMode ? Colors.black : Colors.white, }}>
                <Section title="Personal info">
                    Hello, my name is Michelle Olin
                </Section>
            </View>
        </SafeAreaView>
    );
}
export default PersonalLetterScreen;