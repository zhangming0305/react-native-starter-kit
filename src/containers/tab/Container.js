import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as action from './action';
import Tabs from './Tabs';

export class Container extends React.Component {

  render() {
    const { currentTab } = this.props.tabState;
    return (
      <Tabs
        currentTab={currentTab}
        changeCurrentTab={this.props.changeCurrentTab}
      />
    );
  }
}

Container.propTypes = {
  tabState: React.PropTypes.object.isRequired,
  changeCurrentTab: React.PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  tabState: state.tabReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators(action, dispatch);

export default connect(mapStateToProps,
  mapDispatchToProps)(Container);
