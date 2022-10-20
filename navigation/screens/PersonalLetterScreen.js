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

    return(
        <SafeAreaView>
        <ScrollView style={styles.scrollView}>
            <StatusBar/>
            <View >
                <Section title="Personal Letter">
                </Section>
                <Section>
                    <Text>
                        Hello,
                        Social, motivated and thorough are three words that describe me and that I think are important for the position you are searching for.

                    </Text>
                </Section>
                <Section>
                    <Text>
                        During my time at Softhouse I worked in a team towards NKT. We were working on the development of a reporting tool they use when laying high voltage cables in the ground both on land and at sea.  There I had the opportunity to develop solutions all the way from the database (mssql server), through the Api(C#), up to the frontend using AngularJS.

                    </Text>
                </Section>
                <Section>
                    <Text>
                        During my time in the Manpowergroup I gained a lot of experience working in different types of assignments and systems.
                    </Text>
                </Section>
                <Section>
                    <Text>
                        Experis provides companies with skills through recruitment and consultancy services. My first assignment was at Ericsson, where I had the opportunity to work and develop in a team environment in a large project. As Ericsson is a multicultural company, English was a requirement and the team I was part of was mostly from countries other than Sweden, so English was a must in order to be able to communicate.
                    </Text>
                </Section>
                <Section>
                    <Text>
                        During my time at Lexicon I developed my skills in Java 8, in addition to that I developed skills in techniques such as JavaScript, Databases, Json REST etc. As a final part of the education I had an APL, Workplace Learning, which I chose to do at Octacon AB, Karlskrona
                    </Text>
                </Section>
                <Section>
                    <Text>
                        During my APL, I learned how to get into already existing projects that involved several different programming languages. For example, in one project I used javascript while in another I used GML (Game Maker Language). I worked in a team where I had to take a lot of responsibility for my own work as most of it was done remotely.
                    </Text>
                </Section>
                <Section>
                    <Text>
                        I look forward to meeting you and telling you more about myself.

                        With kind regards

                        Michelle Olin                </Text>
                </Section>
            </View>
             </ScrollView>
        </SafeAreaView>
    );
}
export default PersonalLetterScreen;

const styles = StyleSheet.create({

  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },

});