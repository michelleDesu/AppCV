
import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';



function Images({imageSource}) {
    const source = imageSource;
        return (
          <View style={styles.viewStyle}>
            <Image
              style={styles.flexibleImage}
              source={source}/>
          </View>
        );

}

export default Images;

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