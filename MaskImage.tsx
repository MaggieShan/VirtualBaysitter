import React from 'react'
import { Image, View } from 'react-native';

const MaskImage = ({
  face: {
    bounds: {
      size: { width: faceWidth, height: faceHeight }
    },
    leftEyePosition,
    rightEyePosition
  }
}) => {
  const imageWidth = faceWidth
  const imageHeight = faceHeight / 3
  const transformAngle = (
    angleRad = Math.atan(
      (rightEyePosition.y - leftEyePosition.y) /
      (rightEyePosition.x - leftEyePosition.x)
    )
  ) => angleRad * 180 / Math.PI
  return (
    <View style={{
      position: 'absolute',
      left: leftEyePosition.x - imageWidth * 0.35,
      top: leftEyePosition.y - imageHeight * 0.4
    }}>
      <Image
        source={require('./src/Untitled_Artwork.png')}
        style={{
          width: imageWidth,
          height: imageHeight,
          resizeMode: 'contain',
          transform: [{ rotate: `${transformAngle()}deg`}]
        }}
      />
    </View>
  );
};

export default MaskImage