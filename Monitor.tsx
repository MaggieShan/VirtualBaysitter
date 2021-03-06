import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import { Camera } from 'expo-camera'; 
import * as Permissions from 'expo-permissions';
import * as FaceDetector from 'expo-face-detector';
import { NavigationContainer } from '@react-navigation/native'
import Mask from './Mask'
import { sendSMS } from './Notif'

export default class Monitor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasCameraPermission: null,
      faces: [], 
      timerID: null,
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
      
      if (this.state.timerID) {
        clearTimeout(this.state.timerID); 
        this.setState({ timerID: null })
      } 
    }

    isFaceGone() {
      sendSMS();
    }

    isFaceOutside(faces) {
      if (faces.length == 0) {
        console.log("GONE GONE GONE");

        if (this.state.timerID == null){ 
          let timerID = setTimeout(this.isFaceGone, 5000);
          this.setState({ timerID });
        }
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
          opacity: 0, 
        },
        cameraContainer: {
          position: 'absolute', 
          width: '100%',
          height: '100%',
        },
        face: {
          padding: 10,
          borderWidth: 2,
          borderRadius: 2,
          position: 'absolute',
          borderColor: '#FFD700',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        facesContainer: {
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          top: 0,
        },
        buttonContainer: {
          flex: 1,
          backgroundColor: 'transparent',
          flexDirection: 'row',
          margin: 20,
        },
        button: {
          flex: 0.1,
          alignSelf: 'flex-end',
          alignItems: 'center',
        },
        text: {
          fontSize: 18,
          color: 'white',
        },
      });
