// Import the necessary libraries to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
// We import our header file we wrote
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create our component
const App = () => (
    // flex: 1 indicates we want the scroll to go all the way to the bottom of the view
    <View style={{ flex: 1 }}>
        <Header headerText={'Your albums'} />
        <AlbumList />
    </View>
);

// Register our component
AppRegistry.registerComponent('albums', () => App);
