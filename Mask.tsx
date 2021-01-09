import React from 'react'
import { StyleSheet, View } from 'react-native';

const Mask = ({ 
    face: {
        bounds: {
            origin: { x: containerX, y: containerY },
            size: { width: faceWidth }
        },
        leftEyePosition,
        rightEyePosition
    } 

    }) => {

    const eyeWidth = faceWidth / 4 
    const translatedEyePositionX = eyePosition => eyePosition.x - eyeWidth / 2 - containerX
    const translatedEyePositionY = eyePosition => eyePosition.y - eyeWidth / 2 - containerY
    
    const translatedLeftEyePosition = {
        x: translatedEyePositionX(leftEyePosition),
        y: translatedEyePositionY(leftEyePosition)
    }
    const translatedRightEyePosition = {
        x: translatedEyePositionX(rightEyePosition),
        y: translatedEyePositionY(rightEyePosition)
    }

    const eyeStyle = (eyePosition, eyeBorderWidth = eyeWidth / 10) => ({
        position: 'absolute',
        left: eyePosition.x,
        top: eyePosition.y,
        borderRadius: eyeWidth,
        width: eyeWidth,
        height: eyeWidth,
        borderWidth: eyeBorderWidth,
        borderColor: 'black',
        backgroundColor:'yellow'
    });

    const containerStyle = (containerX, containerY) => ({
        position: 'absolute',
        left: containerX,
        top: containerY
    });


    return (
        <View style={{ position: 'absolute', left: containerX, top: containerY }}>
            <View style = {{...eyeStyle(translatedLeftEyePosition)}} />
            <View style = {{...eyeStyle(translatedRightEyePosition)}} />
        </View>
    );
};

export default Mask

const styles = StyleSheet.create({
    container: {
     
    },
  });