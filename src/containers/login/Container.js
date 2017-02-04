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
    const { edit } = this.props.welcomeState;
    const { onFieldsChange, login } = this.props;
    return (
      <Login
        edit={edit}
        onFieldsChange={onFieldsChange}
        login={login}
      />
    );
  }
}


Container.propTypes = {
  welcomeState: React.PropTypes.object.isRequired,
  onFieldsChange: React.PropTypes.func.isRequired,
  login: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  welcomeState: state.loginReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators(action, dispatch);

export default connect(mapStateToProps,
  mapDispatchToProps)(Container);

