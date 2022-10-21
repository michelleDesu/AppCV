import Unorderedlist from 'react-native-unordered-list';
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

function UlList({config}){
    const arrayElements = config;
     return (
        <Unorderedlist style={styles.ulDefault}>
               {arrayElements.map((arrayElement) => {
                       return (
                       <Unorderedlist  key={arrayElement.id} bulletUnicode={0x2023} style={styles.ulDefault2} >
                           <Text style={styles.ulText}>{arrayElement.text}</Text>
                        </Unorderedlist>
                       );
                     })}

        </Unorderedlist>

     );
}
export default UlList;

 const styles = StyleSheet.create({

   ulDefault:{
     fontSize: 0,
     fontWeight: 'bold',
   },
    ulDefault2:{
     fontSize: 24,
     fontWeight: 'bold',
     color: 'black',
   },
   ulText: {
     fontSize: 24,
     fontWeight: 'bold',
   },
 });
