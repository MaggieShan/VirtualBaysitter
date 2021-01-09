import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { State } from 'react-native-gesture-handler';
import Doodler from './Doodler';

export default class Game extends React.Component {

    state = {
        platforms: [
            {
                x: 100,
                y: 100
            },
            {
                x: 150,
                y: 150
            }
        ],
        doodler: {
            x: 100,
            y: 50
        }
    };

    render() {
        return (
            <>
            <View style={styles.grid}/>
            <Doodler x={this.state.doodler.x} y={this.state.doodler.y} />
            </>
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