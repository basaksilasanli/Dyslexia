import React,{Component} from 'react';
import {View, Text} from 'react-native';

class Menu extends Component {
    render(){
        return(
            <View style={{flex: 1}}>
                <Text>Home</Text>
                <Text>Profile</Text>
                <Text>Logout</Text>
            </View>
        )
    }
}


export default Menu;