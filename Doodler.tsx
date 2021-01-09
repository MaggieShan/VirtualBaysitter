import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { State } from 'react-native-gesture-handler';

export default class Doodler extends React.Component {
    render() {
        return (
            <View style={{
                width: 60,
                height: 80,
                backgroundColor: 'rgb(247, 247, 239)',
                left: this.props.x,
                top: this.props.y
            }}/>
        );
    }
};

const styles = StyleSheet.create({
    grid: {
        width: 400,
        height: 600,
        backgroundColor: 'lightblue',
        position: 'relative', 
        fontSize: 200,
        textAlign: 'center',
    },
    
    doodler: {
        width: 60,
        height: 80,
        backgroundColor: 'rgb(247, 247, 239)',
        position: 'absolute',
    },
    
    platform: {
        width: 85,
        height: 15,
        backgroundColor: 'green',
        position: 'absolute',
    },
  });