import React from 'react';
import type {Node} from 'react';
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

function Section({children, title}) {
  return (
    <View style={styles.sectionContainer}>
      <Text style={[ styles.sectionTitle ]}
        >
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});