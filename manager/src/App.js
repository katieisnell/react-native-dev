import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import LoginForm from './components/LoginForm';
import reducers from './reducers';

import firebase_credentials from './data/firebase_credentials.json';

class App extends Component {
  componentWillMount() {
    const config = firebase_credentials;
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
