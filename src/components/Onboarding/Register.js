import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Item } from 'native-base';
import { colors } from '../../Style';
import logo from '../../img/logo.png'

const { width, height } = Dimensions.get('window');

class Register extends Component {
    render() {
        return (
            <View style={styles.view_main}>

                <View style={styles.view_image}>
                    <Image style={styles.image} source={logo} />
                </View>

                <View style={styles.view_input}>
                    <TextInput  maxLength={30} placeholder='Name' style={styles.textInput}></TextInput>
                    <TextInput  maxLength={30} placeholder='Age' style={styles.textInput}></TextInput>
                    <TextInput  maxLength={30} placeholder='Email' style={styles.textInput}></TextInput>
                    <TextInput  maxLength={30} placeholder='Password' style={styles.textInput}></TextInput>
                </View>

                <Item style={styles.item}>
                    <Button style={styles.button} success>
                        <Text style={styles.buttonText}>Create Account</Text>
                    </Button>
                </Item>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    view_main: {
        flex: 1,
        backgroundColor: colors.main ,
        justifyContent: 'center',
        alignItems: 'center'
    },
    view_image: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height * 0.1
    },
    image: {
        height: 100,
        width: 200,
        marginBottom: 60 
    },
    view_input: {
        paddingTop: 5,
        height: height * 0.25,
        justifyContent: 'center',
    },
    textInput: {
        backgroundColor: '#ffffff',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 8,
        paddingRight: 7,
        height: 40,
        width: width * 0.7
    },
    button: {
        width: width * 0.8,
        justifyContent: 'center',
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    },
    item: {
        marginTop: 50
    }
})

export default Register;
