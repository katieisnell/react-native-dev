import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// Here we destructure the album from the props object
const AlbumDetail = ({ album }) => {
    // Now we further destructure the title, artist and thumbnail from the album
    const { title, artist, thumbnail_image } = album;

    return (
        <Card>
            <CardSection>         
                <View>
                    <Image 
                        source={{ uri: thumbnail_image }} 
                        style={styles.thumbnailStyle}
                    />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    }
};

export default AlbumDetail;
