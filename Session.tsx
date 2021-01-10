import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Button, StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, Pressable, TextInput, TouchableOpacity, Image } from 'react-native';
import * as Font from 'expo-font';
import CameraScreen from './Camera';
import Game from './Game';
import Monitor from './Monitor';

function SessionScreen({ navigation }) {
    return (
        <View style={styles.container}>
        <SafeAreaView style={styles.safeAreaView}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.content}
        >
        <Pressable>
            <View style={styles.form}>
              <TextInput
                autoCapitalize="none"
                autoCompleteType="email"
                autoCorrect={false}
                keyboardType="Name"
                returnKeyType="next"
                style={styles.textInput}
                textContentType="name"
              />
              <Text style={styles.label}>'s Session</Text>
            </View>
          </Pressable>
          <TouchableOpacity 
              style={styles.button}
              onPressIn={() => navigation.navigate('Camera')}>
                <Text style={styles.textButton}>Track their face</Text> 
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.button1}
              onPressIn={() => navigation.navigate('Monitor')}>
                <Text style={styles.textButton}>Start monitoring!</Text> 
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.button2}
              onPressIn={() => navigation.navigate('Game')}>
                <Text style={styles.textButton}>Play Games</Text> 
            </TouchableOpacity>
          </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
    );
}

const Stack = createStackNavigator(); 

let customFonts = {
    'NunitoBold': require('./assets/Nunito-ExtraBold.ttf'),
    'NunitoSemi': require('./assets/Nunito-SemiBold.ttf'),
    'NunitoLight': require('./assets/Nunito-Light.ttf'),
  };

export default class Session extends React.Component {
    state = {
        fontsLoaded: false
      };
    
      async loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
      }
    
      componentDidMount() {
        this.loadFontsAsync();
      }

    render() {
        return (
            <>
              <Stack.Navigator>
              <Stack.Screen 
                    name="Session" 
                    component={SessionScreen}
                    options={{ 
                        headerShown: false
                      }}/>
                <Stack.Screen 
                    name="Camera" 
                    component={CameraScreen}
                    options={{ 
                        headerShown: false
                      }}/>
                <Stack.Screen 
                    name="Monitor" 
                    component={Monitor}options={{ 
                    headerShown: false
                      }}/>
                <Stack.Screen name="Game" component={Game}/>
              </Stack.Navigator>
            </>
          );
    }
}; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4EFEB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        padding: 10,
        height: 40,
        width: 200,
        borderRadius: 15,
        backgroundColor: '#E9E1DB',
        marginBottom: 15,
    },
    button: {
        padding: 10,
        marginTop: 10,
        backgroundColor: '#FC4A55',
        borderRadius: 20,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    
        elevation: 6,
      },
      button1: {
        padding: 10,
        marginTop: 10,
        backgroundColor: '#62DAE7',
        borderRadius: 20,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    
        elevation: 6,
      },
      button2: {
        padding: 10,
        marginTop: 10,
        backgroundColor: '#64C092',
        borderRadius: 20,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    
        elevation: 6,
      },
      textButton: {
        fontFamily: 'NunitoSemi', 
        textAlign: 'center',
        fontSize: 15
      },
}); 