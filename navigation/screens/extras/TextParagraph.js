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
import Section from './../Section.js';

function TextParagraph({config}){
    const arrayElements = config;
     return (
     <Section>
            {arrayElements.map((arrayElement) => {
              return (
                  <Text key={arrayElement.id}>{arrayElement.text}{'\n'}{'\n'}</Text>
              );
            })}
     </Section>
     );
}
export default TextParagraph;