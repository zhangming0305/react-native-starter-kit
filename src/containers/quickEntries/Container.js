import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as action from './action';
import Index from './Index';

export class Container extends React.Component {


  render() {
    const { checkedEntries } = this.props.quickEntriesState;
    const { onEntryCheck } = this.props;
    return (
      <Index
        checkedEntries={checkedEntries}
        onEntryCheck={onEntryCheck}
      />
    );
  }
}


Container.propTypes = {
  quickEntriesState: React.PropTypes.object.isRequired,
  onEntryCheck: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  quickEntriesState: state.quickEntriesReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators(action, dispatch);

export default connect(mapStateToProps,
  mapDispatchToProps)(Container);
