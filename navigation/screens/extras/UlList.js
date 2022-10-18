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

function UlList(){
     return (
        <Unorderedlist style={styles.ulDefault}>

            <Unorderedlist  bulletUnicode={0x2023} style={styles.ulDefault2} >
                  <Text style={styles.ulText}>
                       C++ (Basic)
                  </Text>
            </Unorderedlist>

            <Unorderedlist bulletUnicode={0x2023} style={styles.ulDefault2}>
                  <Text style={styles.ulText}>
                      CSS3 (Basic)
                  </Text>
            </Unorderedlist>

            <Unorderedlist bulletUnicode={0x2023} style={styles.ulDefault2}>
                  <Text style={styles.ulText}>
                      HTML5 (Basic)
                  </Text>
            </Unorderedlist>

            <Unorderedlist bulletUnicode={0x2023} style={styles.ulDefault2}>
                  <Text style={styles.ulText}>
                      Java (Basic)
                  </Text>
            </Unorderedlist>


            <Unorderedlist bulletUnicode={0x2023} style={styles.ulDefault2}>
                  <Text style={styles.ulText}>
                      Javascript (Basic)
                  </Text>
            </Unorderedlist>


            <Unorderedlist bulletUnicode={0x2023} style={styles.ulDefault2}>
                  <Text style={styles.ulText}>
                      AngularJS (Basic)
                  </Text>
            </Unorderedlist>


            <Unorderedlist bulletUnicode={0x2023} style={styles.ulDefault2}>
                  <Text style={styles.ulText}>
                      C# (Basic)
                  </Text>
            </Unorderedlist>


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
