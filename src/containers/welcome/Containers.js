import React from 'react';
import { View, Text, Alert } from 'react-native';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import * as action from './action';
import Welcome from './Welcome';


class WelcomeContainer extends React.Component {

  constructor(props) {
    super(props);
    this.props.fetchStartImage();
  }

  render() {
    const { img, text } = this.props.welcomeState;
    return (
      <View>
        <Welcome
          img={img}
          text={text}
        />
      </View>
    );
  }
}

WelcomeContainer.propTypes = {
  welcomeState: React.PropTypes.object,
  fetchStartImage: React.PropTypes.func,
};

const mapStateToProps = state => ({
  welcomeState: state.welcomeReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators(action, dispatch);

export default connect(mapStateToProps,
  mapDispatchToProps)(WelcomeContainer);

