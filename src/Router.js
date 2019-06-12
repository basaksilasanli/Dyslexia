import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import {Icon} from 'native-base';
import { Router, Scene, Stack, Actions, Drawer } from 'react-native-router-flux';
import { Login, Register, ForgotPassword } from './components/Onboarding';
import { Home, Profile, Result, Test, Menu } from './components/Pages'

const drawerWidth =Dimensions.get('window').width*0.7

export default class componentName extends Component {
    render() {
        return (
            <Router
                navigationBarStyle={styles.navigationBarStyle}
                titleStyle={styles.navigationBarTitleStyle}
                sceneStyle={{ backgroundColor: 'white' }}>
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
                        component={ForgotPassword} />

                    <Drawer
                        hideNavBar
                        key="drawerMenu"
                        contentComponent={Menu}
                        drawerWidth={drawerWidth}
                        drawerPosition="left"
                    >
                        <Scene
                            key='home'
                            title="Home"
                            initial
                            component={Home} />
                    </Drawer>
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