import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';
import { getPosts } from '../../actions'

class Home extends Component {
  
  render() {
    return (
      <View>
        <Text> Home </Text>
      </View>
    );
  }
}

const mapStateToProps = ({ authResponse }) => {
  console.log('authResponse:', authResponse)
  return { user: authResponse.user }
};
export default connect(mapStateToProps,{})(Home);