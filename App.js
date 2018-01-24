import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import store from './store';
import LoginForm from './LoginForm';

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
    return <Provider store={store}>{<LoginForm />}</Provider>;
  }
}

export default App;
