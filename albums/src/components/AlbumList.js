import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    state = { albums: [] };

    // A lifecycle method that determines whether the component mounted correctly
    componentWillMount() {
        // To see the console we press cmd+D on the simulator and open up the console in Chrome
        //console.log('componentWillMount in AlbumList called');
        // debugger; creates a breakpoint 

        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    // Every class MUST have a render(), and this is called first when the class is called
    render() {
        return (
            <View>
                <Text>Album list...</Text>
            </View>
        );
    } // Note we don't need a semi-colon at the end of the render() method
} // And also don't need a semi-colon because AlbumList is a class

export default AlbumList;
