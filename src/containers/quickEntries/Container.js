import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import * as action from './action';
import Index from './Index';

export class Container extends React.Component {

  constructor(props) {
    super(props);
    this.save = this.save.bind(this);
  }

  componentWillMount() {
    Actions.refresh({ onRight: this.save, rightTitle: '保存' });
  }

  save() {
    const { checkedEntries } = this.props.quickEntriesState;
    this.props.saveEntries(checkedEntries);
  }

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
  saveEntries: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  quickEntriesState: state.quickEntriesReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators(action, dispatch);

export default connect(mapStateToProps,
  mapDispatchToProps)(Container);
