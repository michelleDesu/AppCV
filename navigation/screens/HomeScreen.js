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
import Images from './extras/Images.js';

function HomeScreen({navigation}) {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
  return (
   <SafeAreaView style={backgroundStyle}>
           <View>
           <Section >
           <Images/>
           </Section>
                <Section title="Michelle Olin" >
                   Mainly educated at Blekinge Institute of Technology where I
                   studied game programming. During my worklife I have worked in
                   various administrative positions where communication and a
                   service-oriented mindset have been necessary to perform daily
                   tasks, but also in areas involving programming and IT.
                </Section>
           </View>
   </SafeAreaView>
  );
}

export default HomeScreen;