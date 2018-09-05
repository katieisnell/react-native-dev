// Import the necessary libraries to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
// We import our header file we wrote
import Header from './src/components/Header';

// Create our component
const App = () => (
        <Header headerText={'Your albums'} />
);

// Register our component
AppRegistry.registerComponent('albums', () => App);
