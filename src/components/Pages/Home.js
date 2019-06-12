import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { uploadPhoto } from '../../actions/ImageActions';

import Button from '../global/Button'

import { connect } from 'react-redux';

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
        <View style={styles.head}>
          <Text style={{color:'#009faf', fontSize:32}}>Hoşgeldiniz!</Text>
        </View>
      
        <Text style={styles.text}>Hintli  bir adam suda bata çıka ilerlemeye çalışırken yanına bir akrep gelir. Onu kurtarmaya karar verir ve parmağını akrebe uzatır ama akrep onu sokar. Hintli tekrar akrebi sudan kurtarmaya çalışır ama akrep onu tekrar sokar.Yakınlarındaki başka biri ona, sürekli onu sokmaya çalışan akrebi kurtarmaya çalışmaktan vazgeçmesini söyler. Ama Hintli adam şöyle der:Sokmak akrebin doğasında vardır. Benim doğamda ise sevmek var. Neden sokmak akrebin doğasında var diye kendi doğamda olan sevmekten vazgeçeyim? </Text>

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
  head: {
    flex:0.2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    
  },
  text: {
    flex:0.8,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#37474f',
    fontSize: 16

  }


})

const mapStateToProps = ({ imageResponse }) => {
  console.log('authResponse:', imageResponse)
  return { loading: imageResponse.loading }
};
export default connect(mapStateToProps,{ uploadPhoto })(Home);