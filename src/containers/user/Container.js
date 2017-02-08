import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import * as action from './action';
import List from './List';

export class Container extends React.Component {

  constructor(props) {
    super(props);
    this.props.fetchStartImage();
  }

  render() {
    return (
      <View >
        <List data={this.props.userState.data} />
      </View>
    );
  }
}


const mapStateToProps = state => ({
  userState: state.userReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators(action, dispatch);

export default connect(mapStateToProps,
  mapDispatchToProps)(Container);
