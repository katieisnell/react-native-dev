// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Create our header component, with the props definition
const Header = (props) => {
    const { viewStyle, textStyle } = styles;
    // Add the prop to the tag
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

// Define the style of the component
const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        // Below two lines align to the absolute centre of the view
        justifyContent: 'center',
        alignItems: 'center',

        height: 60,
        paddingTop: 15,

        // Creates a pink hue below the title bar
        shadowColor: '#FE7F9C',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,  

        // ...
        elevation: 2,
        position: 'relative'
    },

    textStyle: {
        fontSize: 25
    }
};

// Make component available to other places in the app
export default Header;
