import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions, Image } from 'react-native';
import { Camera } from 'expo-camera'; 
import * as Permissions from 'expo-permissions';
import * as FaceDetector from 'expo-face-detector';
import { NavigationContainer } from '@react-navigation/native'
import Mask from './Mask'
import MaskImage from './MaskImage'
import { sendSMS } from './Notif'

export default class CameraScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasCameraPermission: null,
      faces: [], 
    }
    this.onCameraPermission = this.onCameraPermission.bind(this)
    this.onFacesDetected = this.onFacesDetected.bind(this)
    this.onFaceDetectionError = this.onFaceDetectionError.bind(this)
  }

    componentDidMount() {
      Permissions
        .askAsync(Permissions.CAMERA)
        .then(this.onCameraPermission)
    }

    onCameraPermission({ status }) {
      this.setState({ hasCameraPermission: status === 'granted' })
    }

    onFacesDetected({ faces }) {
      // console.log(faces)
      this.setState({ faces })
      this.isFaceOutside(faces)
    }

    isFaceOutside(faces) {
      if(faces.length == 0) {
        console.log("GONE GONE GONE");
        return;
      }

      const windowWidth = Dimensions.get('window').width;
      const windowHeight = Dimensions.get('window').height;
      const facePositionX = faces[0].bounds.origin.x;
      const facePositionY = faces[0].bounds.origin.y;

      if ((facePositionX < 0) || (facePositionX > windowWidth) || (facePositionY < 0) || (facePositionY > windowHeight)) {
        console.log("WARNING ALSDKFJKADSJFDAKSLJFNKLSAJKJFAKSLJ")
        return;
      }
    }

    onFaceDetectionError(error) {
      console.log(error)
    }

    render() {
      const { faces, hasCameraPermission } = this.state;
      if(hasCameraPermission == null) {
        return <View/> 
      } 
      if(hasCameraPermission == false) {
        return (
          <View>
            <Text>Please give camera access</Text>
          </View>
        )
      }
        return(
            <View style={styles.container}>
              <View style={styles.cameraContainer}>
              <Camera 
                style={styles.camera} 
                type={Camera.Constants.Type.front}
                faceDetectorSettings={{
                  mode: FaceDetector.Constants.Mode.fast,
                  detectLandmarks: FaceDetector.Constants.Landmarks.all,
                  runClassifications: FaceDetector.Constants.Classifications.all,
                }}
                onFacesDetected={this.onFacesDetected}
                onFaceDetectionError={this.onFaceDetectionError}
              />
              { 
                faces.map(face => <Mask key={faces.faceID} face={face} />)
              }
              </View>
              
                <Image style={styles.avatar1} source={require('./src/avatar1.png')}/>
                <Text style={styles.label}>Stay still! </Text>
                <Text style={styles.label1}>We're tracking your face </Text>
                
              
          </View>
        )
      }

    };
        
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#F4EFEB',
        },
        camera: {
          flex: 1,
        },
        avatar1:{
          position: 'absolute',
          width: 250,
          height: 100,
          marginTop: '115%',
          alignContent: 'flex-start'
        },
        cameraContainer: {
          position: 'absolute', 
          marginTop: 0,
          width: '100%',
          height: '70%',
          borderRadius: 30
        },
        label: {
          position: 'absolute',
          marginTop: 650,
          marginLeft: 70,
          fontWeight: 'bold',
          fontSize: 30
        },
        label1: {
          position: 'absolute',
          marginTop: 690,
          marginLeft: 70,
          fontSize: 20
        }
      });
