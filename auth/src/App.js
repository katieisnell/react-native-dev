import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

// Due to having an index.js file in common, we can import without specifying the Header file
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

const firebaseDetails = require('./firebaseDetails.json');

class App extends Component {
    state = { loggedIn: null };

    componentWillMount () {
        firebase.initializeApp({
            apiKey: firebaseDetails.apiKey,
            authDomain: firebaseDetails.authDomain,
            databaseURL: firebaseDetails.databaseURL,
            projectId: firebaseDetails.projectId,
            storageBucket: firebaseDetails.storageBucket,
            messagingSenderId: firebaseDetails.messagingSenderId
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
