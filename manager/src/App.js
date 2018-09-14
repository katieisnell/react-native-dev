import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import firebase_credentials from './data/firebase_credentials.json';

class App extends Component {
  componentWillMount() {
    const config = firebase_credentials;
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Our initial app</Text>
        </View>
      </Provider>

    );
  }
}

export default App;