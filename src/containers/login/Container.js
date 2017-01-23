import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import * as action from './action';
import Login from './Login';


export class Container extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { img, text } = this.props.welcomeState;
    return (
      <Login
        img={img}
        text={text}
      />
    );
  }
}


Container.propTypes = {
  welcomeState: React.PropTypes.object.isRequired,
  fetchStartImage: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  welcomeState: state.welcomeReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators(action, dispatch);

export default connect(mapStateToProps,
  mapDispatchToProps)(Container);

