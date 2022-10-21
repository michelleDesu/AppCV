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

    const source= require('./extras/images/my-icon.png');
  return (
    <SafeAreaView style={styles.SafeAreaViewcontainer}>
        <ScrollView style={styles.scrollView}>
            <View style={styles.bgColor}>
                <Section >
                <Images imageSource={source}/>
                </Section>
                    <Section title="Michelle Olin" >
                    Mainly educated at Blekinge Institute of Technology where I
                    studied game programming. During my worklife I have worked in
                    various administrative positions where communication and a
                    service-oriented mindset have been necessary to perform daily
                    tasks, but also in areas involving programming and IT.
                </Section>
            </View>
        </ScrollView>
    </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    SafeAreaViewcontainer: { flex: 1, width: '100%' },

   bgColor:{
     backgroundColor: '#f2dec4',
   },
   sectionTitle:{
    backgroundColor: '#3f4042',
   },
   scrollView: {
        backgroundColor: '#f2dec4',
      },
 });

