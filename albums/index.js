// Import the necessary libraries to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
// We import our header file we wrote
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create our component
const App = () => (
    // flex: 1 property expands this component to fill the entire content area of device
    <View style={{ flex: 1 }}>
        <Header headerText={'Your albums'} />
        <AlbumList />
    </View>
);

// Register our component
AppRegistry.registerComponent('albums', () => App);
