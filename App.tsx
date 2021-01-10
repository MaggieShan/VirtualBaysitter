import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import CameraScreen from './Camera';
import Game from './Game';
import Monitor from './Monitor';
import Notif from './Notif';

function HomeScreen({ navigation }) {
  return (
    <>
    <Text>HomeScreen</Text>
    <Button
        title="Log in"
        onPress={() => navigation.navigate('Camera')}
      />
      <Button
        title="Game"
        onPress={() => navigation.navigate('Game')}
      />
      <Button
        title="Monitor"
        onPress={() => navigation.navigate('Monitor')}
      />
      <Button
        title="Notif"
        onPress={() => navigation.navigate('Notif')}
      />
    </>
  );
}

const Stack = createStackNavigator(); 

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Camera" component={CameraScreen}/>
        <Stack.Screen name="Game" component={Game}/>
        <Stack.Screen name="Monitor" component={Monitor}/>
        <Stack.Screen name="Notif" component={Notif}/>
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}; 

export default App; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
