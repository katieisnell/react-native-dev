import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

// Due to having an index.js file in common, we can import without specifying the Header file
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount () {
        firebase.initializeApp({
            apiKey: 'AIzaSyBrYovJlxIq3RZ5kHo0ridol8m1NhvgVSc',
            authDomain: 'auth-255be.firebaseapp.com',
            databaseURL: 'https://auth-255be.firebaseio.com',
            projectId: 'auth-255be',
            storageBucket: 'auth-255be.appspot.com',
            messagingSenderId: '886987018285'
          });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return <CardSection><Button>Log out</Button></CardSection>;
            case false:
                return <LoginForm />;
            default:
                return (
                    <View style={styles.loadingSpinner}>
                        <Spinner size={'large'} />
                    </View>
                );
        }
    }
    
    render () {
        return (
            <View>
                <Header headerText={'This is Auth'} />
                {this.renderContent()}
            </View>  
        );
    }
};

const styles = {
    loadingSpinner: {
        padding: 30,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    }
};

export default App;
