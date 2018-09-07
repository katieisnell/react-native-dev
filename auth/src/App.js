import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

// Due to having an index.js file in common, we can import without specifying the Header file
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

const firebaseDetails = require('./firebaseDetails.json');

class App extends Component {
    componentWillMount () {
        firebase.initializeApp({
            apiKey: firebaseDetails.apiKey,
            authDomain: firebaseDetails.authDomain,
            databaseURL: firebaseDetails.databaseURL,
            projectId: firebaseDetails.projectId,
            storageBucket: firebaseDetails.storageBucket,
            messagingSenderId: firebaseDetails.messagingSenderId
          });
        
    }
    render () {
        return (
            <View>
                <Header headerText={'This is Auth'} />
                <LoginForm />
            </View>  
        );
    }
}

export default App;
