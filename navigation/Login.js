import React, { Component } from 'react';
import { View, TextInput, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { Header, ListItem, Text, Button } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getLoginStore} from './../models/login/LoginStore.js';

const store = getLoginStore();

export default class Login extends Component {

  constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }
    onChangeText = (text) => {
        if (text && !!text) {
            this.setState({ text })
        }
    }
    logIn = () => {
        try {
            const { text } = this.state
            if (text && !!text) {
                this.setState({ text: '' })
                store.login(text)
            } else {
                alert('Please enter username!')
            }
        } catch (error) {
            alert('Something went wrong')
        }
    }

    render() {
    const { text } = this.state
    return (
        <>
            <SafeAreaView style={styles.SafeAreaViewcontainer}>
                <View style={{ margin: 10 }}>
                    <TextInput style={styles.textinput}
                        value={text}
                        placeholder={'Enter a username here'}
                        onChangeText={this.onChangeText}
                    />

                    <View style={styles.buttonrow}>
                        <Button
                            title="Login"
                            containerStyle={styles.buttonsubmit}
                            onPress={this.logIn}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </>
    );

    }

 }

 const styles = StyleSheet.create({
     SafeAreaViewcontainer: { flex: 1, width: '100%' },
     button: {
         alignItems: 'center',
         justifyContent: 'center',
         alignSelf: 'center',
         height: 55,
         marginTop: 10,
         backgroundColor: 'white',
     },
     buttonsubmit: {
         width: '100%',
         flex: 1,
         justifyContent: 'space-between',
         marginLeft: 10,
         marginRight: 10,
         marginTop: 20,
         marginBottom: 20,
     },
     buttonrow: {
         flexDirection: 'row'
     },
     textinput:{
         borderWidth: 1,
     }
 });