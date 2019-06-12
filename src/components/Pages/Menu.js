import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Menu extends Component {
    render() {
        return (
            <View style={styles.menu}>
                <Text onPress={() => Actions.home()} style={styles.sectionStyle}>Home</Text>
                <Text onPress={() => Actions.profile()} style={styles.sectionStyle}>Profile</Text>
                <Text style={styles.sectionStyle}>Logout</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    menu: {
        flex: 1
    },
    sectionStyle:{
        marginLeft: 20,
        marginTop: 20,
        fontSize: 15,
        fontWeight: '600',
    }
})

export default Menu;