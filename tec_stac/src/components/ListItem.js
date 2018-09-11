import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';
import LibraryList from './LibraryList';

class ListItem extends Component {
  render() {
    const { titleStyle } = styles;
    return (
      <CardSection>
        <Text style={titleStyle}>{this.props.library.item.title}</Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 22,
    paddingLeft: 5
  }
};

export default ListItem;
