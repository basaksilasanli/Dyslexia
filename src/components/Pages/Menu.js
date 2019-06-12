import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

class Menu extends Component {
    render() {
        return (
            <View style={styles.menu}>

                <View style={styles.item}>
                   <Icon name="home" />
                    <Text onPress={() => Actions.home()} style={styles.sectionStyle}>Home</Text>
                </View>

                <View style={styles.item}>
                        <Icon name="person" />
                        <Text onPress={() => Actions.profile()} style={styles.sectionStyle}>Profile</Text>
                </View>

                <View style={styles.item}>
                    <Icon name="log-out" />
                    <Text style={styles.sectionStyle}>Logout</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    menu: {
        flex: 1
    },
    sectionStyle: {
        marginLeft: 5,
        marginTop: 5,
        fontSize: 15,
        fontWeight: '600',
    },
    item: {
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 20,
    }
})

export default Menu;