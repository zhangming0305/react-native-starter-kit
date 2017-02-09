import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import * as action from './action';
import Tabs from './Tabs';

export class Container extends React.Component {

  render() {
    const { currentTab } = this.props.tabReducer;
    return (
      <Tabs
        currentTab={currentTab}
        changeCurrentTab={this.props.changeCurrentTab}
      />
    );
  }
}


const mapStateToProps = state => ({
  tabReducer: state.tabReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators(action, dispatch);

export default connect(mapStateToProps,
  mapDispatchToProps)(Container);
