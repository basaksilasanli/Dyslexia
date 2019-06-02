import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Router, Scene, Stack, Actions } from 'react-native-router-flux';
import {Login, Register, ForgotPassword} from './components/Onboarding';
import { Home, Profile, Result, Test} from './components/Pages'

export default class componentName extends Component{
    render(){
        return(
            <Router
             navigationBarStyle={styles.navigationBarStyle}
             titleStyle={styles.navigationBarTitleStyle}
             sceneStyle={{backgroundColor: 'white'}}>
                 <Stack key='onboarding'>
                    <Scene 
                     key='login'
                     hideNavBar
                     component={Login}
                     initial
                     />

                    <Scene
                     key='register'
                     hideNavBar
                     component={Register}
                     />

                    <Scene
                     key='forgotPassword'
                     hideNavBar
                     component={ForgotPassword}/>

                 </Stack>
            </Router>
        );
    }
}

const styles = StyleSheet.create({
    navigationBarStyle: {
        backgroundColor: 'red',
      },
      navigationBarTitleStyle: {
        color: 'white',
      },
})