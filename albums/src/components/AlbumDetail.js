import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// Here we destructure the album from the props object
const AlbumDetail = ({ album }) => {
    // Now we further destructure the title, artist and thumbnail from the album
    const { title, artist, thumbnail_image, image } = album;
    const {
        headerContentStyle,
        headerTextStyle,
        thumbnailStyle,
        thumbnailContainerStyle,
        imageStyle
    } = styles;

    return (
        <Card>
            <CardSection>         
                <View style={thumbnailContainerStyle}> 
                    <Image 
                        source={{ uri: thumbnail_image }} 
                        style={thumbnailStyle}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image 
                    source={{ uri: image }} 
                    style={imageStyle} 
                />
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItem: 'center',
        marginLeft: 0,
        marginRight: 10
    },
    imageStyle: {
        height: 200,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
