import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import NoteScreen from './src/screens/NoteScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
  Note: NoteScreen,
  Signin: SigninScreen,
  signup: SignupScreen
});

const App = createAppContainer(navigator);

export default App;
