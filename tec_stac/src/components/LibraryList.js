import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  // Our renderItem function receives the prop of a single library
  renderItem(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={(library) => library.id.toString()}
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries }; // Object returned from here is accessable in LibraryList
};

export default connect(mapStateToProps)(LibraryList);
