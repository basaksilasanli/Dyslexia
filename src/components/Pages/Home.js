import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, Dimensions } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { uploadPhoto } from '../../actions/ImageActions';
import img from '../../img/imgText.png'
import Button from '../global/Button'
import { connect } from 'react-redux';

const {width,height} = Dimensions.get('window');

class Home extends Component {

  state = {
    photoUri: null
  }

  handleUploadPhotoButton = () => {
    const options = {
      title: 'Select Photo',
      noData: true,
      quality: 0.7
    };
    
    ImagePicker.showImagePicker(options, (response) => {
      const uri = response.uri;
      if (uri) {
        this.props.uploadPhoto(uri);
      }
    });
  }


  render() {
    const { photoUri } = this.state;
    return (
      <View style={styles.container}>
        {/* <View style={styles.head}>
          <Text style={{ color: '#009faf', fontSize: 32 }}>Hoşgeldiniz!</Text>
        </View> */}

        <View style={{ flex: 2, flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
          <Image style={styles.imageStyle} source={img}/>
        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {
            this.props.loading ?
              <ActivityIndicator size="large" color="#129793" /> :
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ marginBottom: 20 }}> Please Select a Photo! </Text>
                <Button handleButton={this.handleUploadPhotoButton} buttonName='Select a Photo' />
              </View>
          }
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 20,
    paddingBottom: 20
  },
  // head: {
  //   flex: 0.2,
  //   justifyContent: 'flex-start',
  //   alignItems: 'center',

  // },
  imageStyle: {
    flex: 1,
    width: 420,
    height: 420,
    resizeMode: 'contain'
  }
})

const mapStateToProps = ({ imageResponse }) => {
  console.log('authResponse:', imageResponse)
  return { loading: imageResponse.loading }
};
export default connect(mapStateToProps, { uploadPhoto })(Home);