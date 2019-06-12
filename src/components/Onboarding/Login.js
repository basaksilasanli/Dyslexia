import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Item, Input, Icon, Label, Form, Spinner } from 'native-base';
import logo from '../../img/logo.png'
import { colors } from '../../Style';
import { connect } from 'react-redux';
import { login } from '../../actions/AuthActions';

const { width, height } = Dimensions.get('window');

class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    render() {
        let { email, password } = this.state;
        return (
            <SafeAreaView style={styles.view_main}>
                {
                    this.props.loading ? <Spinner color='green' /> :
                        <View style={styles.contanier}>
                            <View style={styles.view_image}>
                                <Image style={styles.image} source={logo} />
                            </View>

                            <Form style={styles.form}>
                                <Item floatingLabel>
                                    <Icon active name='mail' style={styles.icon} />
                                    <Label style={styles.label}>Email</Label>
                                    <Input value={email} onChangeText={(email) => this.setState({ email })} />
                                </Item>
                                <Item floatingLabel>
                                    <Icon active name='key' style={styles.icon} />
                                    <Label style={styles.label}>Password</Label>
                                    <Input value={password} onChangeText={(password) => this.setState({ password })} secureTextEntry />
                                </Item>
                            </Form>

                            <View style={styles.view_forgotPassword}>
                                <TouchableOpacity onPress={() => Actions.forgotPassword()}>
                                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                                </TouchableOpacity>
                            </View>

                            <Item style={styles.item}>
                                <Button onPress={() => this.props.login(email.trim(), password)} style={styles.button} success>
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

                }
            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    view_main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contanier: {
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


const mapStateToProps = ({ authResponse }) => {
    return ({ loading: authResponse.loading })
}

export default connect(mapStateToProps, { login })(Login);