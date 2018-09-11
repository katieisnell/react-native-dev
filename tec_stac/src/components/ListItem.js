import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  render() {
    const { titleStyle } = styles;

    console.log(this.props);
    
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

// If do not want to mapStateToProps, pass null as 1st statement
export default connect(null, actions)(ListItem);
