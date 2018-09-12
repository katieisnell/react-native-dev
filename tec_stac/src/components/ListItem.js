import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  renderDescription() {
    const { library, isExpanded } = this.props;
    
    if (isExpanded) {
      return (
        <Text>{library.item.description}</Text>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library.item;
    
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 22,
    paddingLeft: 5,
    paddingRight: 5
  }
};

const mapStateToProps = (state, ownProps) => {
  const isExpanded = state.selectedLibraryId === ownProps.library.item.id;
  return { isExpanded };
};

// If do not want to mapStateToProps, pass null as 1st statement
export default connect(mapStateToProps, actions)(ListItem);
