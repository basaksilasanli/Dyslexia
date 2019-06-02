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

const mapStateToProps = ({ AuthResponse }) => {
  console.log('AuthResponse:', AuthResponse)
  return { 
    posts: AuthResponse.posts
    
  }
};
export default connect(mapStateToProps,{ getPosts })(Home);