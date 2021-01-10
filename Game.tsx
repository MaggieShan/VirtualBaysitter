import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
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
        },
        goingLeft: false,
        goingRight: false,
    };

    componentDidMount() {
        setInterval(this.gameTick, 30);
    }

    gameTick = () => {
        if (this.state.goingLeft) {
            this.setState((prevState) => {
                return {
                    doodler: {
                        x: prevState.doodler.x - 5,
                        y: prevState.doodler.y
                    }
                }
            });
        }
        if (this.state.goingRight) {
            this.setState((prevState) => {
                return {
                    doodler: {
                        x: prevState.doodler.x + 5,
                        y: prevState.doodler.y
                    }
                }
            });
        }
    }

    startLeft = () => {
        this.setState({goingLeft: true})
    };
    stopLeft = () => {
        this.setState({goingLeft: false})
    };
    startRight = () => {
        this.setState({goingRight: true})
    };
    stopRight = () => {
        this.setState({goingRight: false})
    };

    render() {
        return (
            <>
                <View style={styles.grid}/>
                <Doodler x={this.state.doodler.x} y={this.state.doodler.y} />
                <TouchableOpacity
                    style={styles.leftButton}
                    onPressIn={this.startLeft}
                    onPressOut={this.stopLeft}
                ><Text> LEFT</Text></TouchableOpacity>
                <TouchableOpacity
                    style={styles.rightButton}
                    onPressIn={this.startRight}
                    onPressOut={this.stopRight}
                >
                    <Text>RIGHT
                        </Text></TouchableOpacity>
            </>
        );
    }
};

const styles = StyleSheet.create({
    grid: {
        width: '100%',
        height: '100%',
        backgroundColor: 'lightblue',
        position: 'relative', 
        fontSize: 200,
        textAlign: 'center',
    },
    leftButton: {
        position: 'absolute',
        paddingLeft: 10,
    },
    rightButton: {
        position: 'absolute',
        padding: 10,
        paddingTop: 20,
    }
  });