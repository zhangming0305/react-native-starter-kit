import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as action from './action';
import Login from './Login';


export class Container extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { edit } = this.props.loginState;
    const { onFieldsChange } = this.props;
    return (
      <Login
        edit={edit}
        onFieldsChange={onFieldsChange}
      />
    );
  }
}


Container.propTypes = {
  loginState: React.PropTypes.object.isRequired,
  onFieldsChange: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loginState: state.loginReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators(action, dispatch);

export default connect(mapStateToProps,
  mapDispatchToProps)(Container);
