import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { StackNavigator } from 'react-navigation';

import store from './store';
import LoginForm from './LoginForm';
import WelcomeScreen from './WelcomeScreen';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyC0kFuk8MI2EDwedYhRGbcSDhImL7R4BV8',
      authDomain: 'aptence-3f78f.firebaseapp.com',
      databaseURL: 'https://aptence-3f78f.firebaseio.com',
      projectId: 'aptence-3f78f',
      storageBucket: 'aptence-3f78f.appspot.com',
      messagingSenderId: '138084419312'
    };

    firebase.initializeApp(config);
  }

  render() {
    const MainNavigator = StackNavigator({
      main: { screen: LoginForm },
      welcome: { screen: WelcomeScreen }
    });

    return <Provider store={store}>{<MainNavigator />}</Provider>;
  }
}

export default App;
