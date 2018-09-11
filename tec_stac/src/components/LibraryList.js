import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    console.log(this.props);
    return;
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries }; // Object returned from here is accessable in LibraryList
};

export default connect(mapStateToProps)(LibraryList);
