import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Item } from 'native-base';
import { colors } from '../../Style';
import logo from '../../img/logo.png'
import { connect } from 'react-redux';
import { register } from '../../actions';

const { width, height } = Dimensions.get('window');

class Register extends Component {
    
    state = {
        email: '',
        password: '',
        age: '',
        name: '',
    }

    render() {
        let {email, password, name, age} = this.state;
        return (
            <View style={styles.view_main}>

                <View style={styles.view_image}>
                    <Image style={styles.image} source={logo} />
                </View>

                <View style={styles.view_input}>
                    <TextInput value={name} onChangeText= { (name) => this.setState({name}) } maxLength={30} placeholder='Name' style={styles.textInput}></TextInput>
                    <TextInput value={age} onChangeText= { (age) => this.setState({age}) } maxLength={30} placeholder='Age' style={styles.textInput}></TextInput>
                    <TextInput value={email} onChangeText= { (email) => this.setState({email}) } maxLength={30} placeholder='Email' style={styles.textInput}></TextInput>
                    <TextInput value={password} onChangeText= { (password) => this.setState({password}) } maxLength={30} placeholder='Password' style={styles.textInput} secureTextEntry></TextInput>
                </View>

                <Item style={styles.item}>
                    <Button onPress={() => this.props.register(email.trim(), password, age.trim(), name.trim())} style={styles.button} success>
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


const mapStateToProps = ({ authResponse }) => {
    return { loading: authResponse.loading };
}

export default connect(mapStateToProps, { register })(Register);