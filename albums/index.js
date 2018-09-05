// Import the necessary libraries to help create a component
import React from 'react';
import { AppRegistry, Text } from 'react-native';

// Create our component 
const App = () => (
        <Text>Your albums</Text> 
);

// Register our component
AppRegistry.registerComponent('albums', () => App);
