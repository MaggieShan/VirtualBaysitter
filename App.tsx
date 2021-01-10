import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, Pressable, TextInput, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import Session from './Session'

function LogIn({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.content}
        >
          <Image style={styles.logo} source={require('./src/logo.png')}/>
          <Text style={styles.title}>Welcome back!</Text>

          <Text style={styles.subtitle}>Sign in to your account</Text>

          <Pressable>
            <View style={styles.form}>
              <Text style={styles.label}>Email</Text>

              <TextInput
                autoCapitalize="none"
                autoCompleteType="email"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
                style={styles.textInput}
                textContentType="username"
              />
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.form}>
              <Text style={styles.label}>Password</Text>

              <TextInput
                autoCapitalize="none"
                autoCompleteType="password"
                autoCorrect={false}
                returnKeyType="done"
                secureTextEntry
                style={styles.textInput}
                textContentType="password"
              />
            </View>
          </Pressable>

          <View style={styles.forgotPasswordContainer}>
            <Text style={styles.link}>Forgot password?</Text>
          </View>
            <TouchableOpacity 
              style={styles.button}
              onPressIn={() => navigation.navigate('Home')}>
                <Text style={styles.textButton}>Log In</Text> 
            </TouchableOpacity>
   
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={require('./src/avatar.png')}/>
      <Text style={styles.title}>Hi, Joy </Text>
      <Text style={styles.subtitle2}>Busy again?{"\n"}Leave it to me! </Text>
      <TouchableOpacity 
        style={styles.button2}
        onPressIn={() => navigation.navigate('Home')}>
          <Text style={styles.textButton}>Past Sessions</Text> 
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button1}
        onPressIn={() => navigation.navigate('Session')}>
          <Text style={styles.textButton}>Start Session</Text> 
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button3}
        onPressIn={() => navigation.navigate('Home')}>
          <Text style={styles.textButton}>Learn More</Text> 
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator(); 

let customFonts = {
  'NunitoBold': require('./assets/Nunito-ExtraBold.ttf'),
  'NunitoSemi': require('./assets/Nunito-SemiBold.ttf'),
  'NunitoLight': require('./assets/Nunito-Light.ttf'),
};

export default class App extends React.Component {
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
    if (this.state.fontsLoaded) {
      return (
        <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              name="LogIn" 
              component={LogIn}
              options={{ 
                headerShown: false
              }}/>
            <Stack.Screen 
              name="Home" 
              component={HomeScreen}
              options={{
                headerShown: false
              }} />
            <Stack.Screen 
              name="Session" 
              component={Session}
              options={{
                headerShown: false
              }}/>
          </Stack.Navigator>
        </NavigationContainer>
        </>
      );
    } else {
      return <AppLoading />;
    } 
  }
}; 

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    marginLeft: '35%',
    marginBottom: 10,
  },
  avatar: {
    width: 180,
    height: 180
  },
  container: {
    flex: 1,
    backgroundColor: '#F4EFEB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'NunitoBold', 
    fontSize: 35,
    color: '#62DAE7',
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: 'NunitoBold', 
    fontSize: 20,
    color: '#FFAC5D',
    marginBottom: 10,
  },
  subtitle2: {
    fontFamily: 'NunitoSemi', 
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 30
  },
  form: {
    borderRadius: 8,
  },
  label: {
    fontFamily: 'NunitoLight', 
    fontSize: 15
  },
  link: {
    fontFamily: 'NunitoLight', 
    fontSize: 15,
    marginBottom: 20,
    color: '#FC4A55',
    textDecorationLine: 'underline'
  },
  textButton: {
    fontFamily: 'NunitoSemi', 
    textAlign: 'center',
    fontSize: 15
  },
  button: {
    padding: 10,
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
    width: 175,
    padding: 10,
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
  button2: {
    width: 175,
    padding: 10,
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
  button3: {
    width: 175,
    padding: 10,
    backgroundColor: '#FFAC5D',
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
  textInput: {
    padding: 10,
    height: 40,
    borderRadius: 15,
    backgroundColor: '#E9E1DB',
    marginBottom: 15,
  }
});
