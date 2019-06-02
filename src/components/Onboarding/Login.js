import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Item, Input, Icon, Label, Form } from 'native-base';
import logo from '../../img/logo.png'
import { colors } from '../../Style';

const { width, height } = Dimensions.get('window');

class Login extends Component {
    render() {
        return (
            <View style={styles.view_main}>

                <View style={styles.view_image}>
                    <Image style={styles.image} source={logo} />
                </View>

                <Form style={styles.form}>
                    <Item floatingLabel>
                        <Icon active name='mail' style={styles.icon} />
                        <Label style={styles.label}>Email</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel >
                        <Icon active name='key' style={styles.icon} />
                        <Label style={styles.label}>Password</Label>
                        <Input />
                    </Item>
                </Form>

                <View style={styles.view_forgotPassword}>
                    <TouchableOpacity onPress={() => Actions.forgotPassword()}>
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <Item style={styles.item}>
                    <Button style={styles.button} success>
                        <Text style={styles.buttonText}>Login</Text>
                    </Button>
                </Item>

                <View style={styles.view_touchableText}>
                    <Text style={styles.text}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => Actions.register()}>
                        <Text style={styles.touchableText}>Create new account</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

export default Login;

const styles = StyleSheet.create({
    view_main: {
        flex: 1,
        backgroundColor: colors.main,
        justifyContent: 'center',
        alignItems: 'center'
    },
    view_image: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height * 0.1
    },
    form: {
        width: width * 0.8
    },
    image: {
        height: 100,
        width: 200,
        marginBottom: 20
    },
    button: {
        width: width * 0.8,
        justifyContent: 'center',
        borderRadius: 5
    },
    icon: {
        paddingTop: 18
    },
    label: {
        fontSize: 14
    },
    item: {
        marginTop: 30
    },
    view_forgotPassword: {
        width: width,
        marginTop: 15,
        marginRight: 78,
        alignItems: 'flex-end',
    },
    forgotPasswordText: {
        color: 'blue'
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    },
    view_touchableText: {
        alignItems: 'center',
        marginTop: 100
    },
    text: {
        color: 'black'
    },
    touchableText: {
        color: 'blue'
    }
})