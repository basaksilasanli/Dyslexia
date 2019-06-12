import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Icon } from 'native-base';
import { Router, Scene, Stack, Actions, Drawer } from 'react-native-router-flux';
import { Login, Register, ForgotPassword } from './components/Onboarding';
import { Home, Profile, Result, Test, Menu } from './components/Pages'

const drawerWidth = Dimensions.get('window').width * 0.7

const icon = () => {
    return <Icon name='menu' />
}

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
                        drawerIcon={icon}
                        initial
                    >
                        <Scene
                            key='home'
                            title="Home"
                            component={Home} />
                        <Scene
                            key='profile'
                            title="Profile"
                            component={Profile} />
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