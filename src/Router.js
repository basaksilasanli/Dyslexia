import React, { Component } from 'react';
import {Router, Scene, Tabs } from 'react-native-router-flux'

import Home from './components/Pages/Home';
import Profile from './components/Pages/Profile';

import TabIcon from './components/global/TabBarIcons'


export default class componentName extends Component {
  render() {
    return (
      <Router>
          <Tabs>
              <Scene key = "home"
                    iconName = "home"
                    icon = {TabIcon}
                    component = {Home}
                    title = "Home"
                    initial
              />
      
              <Scene key = "profile"
                    iconName = "user"
                    icon = {TabIcon}
                    component = {Profile}
                    title = "Profile"
              />

          </Tabs>
      </Router>
    );
  }
}