import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

// Due to having an index.js file in common, we can import without specifying the Header file
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount () {
        firebase.initializeApp({
            apiKey: 'AIzaSyBrYovJlxIq3RZ5kHo0ridol8m1NhvgVSc',
            authDomain: 'auth-255be.firebaseapp.com',
            databaseURL: 'https://auth-255be.firebaseio.com',
            projectId: 'auth-255be',
            storageBucket: 'auth-255be.appspot.com',
            messagingSenderId: '886987018285'
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
