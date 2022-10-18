
import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';



class DisplayAnImage extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Image
          style={styles.flexibleImage}
          source={require('./images/my-icon.png')}/>
      </View>
    );
  }
}

export default DisplayAnImage;

const styles = StyleSheet.create({
  smallImage: {
    width: '100%',
    height: 200,
  },
  flexibleImage:{

     width: "100%",
     height: "100%",
     resizeMode: 'contain',
  },
  viewStyle:{
    width: 180,
    height: 200,
    aspectRatio: 1 * 1.4,
  }

});