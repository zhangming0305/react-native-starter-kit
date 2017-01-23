import React from 'react';
import { connect } from 'react-redux';
import { Platform } from 'react-native';
import { Router, Scene, ActionConst } from 'react-native-router-flux';

import WelcomeContainer from '../containers/welcome/Container';
import LoginContainer from '../containers/login/Container';
import IndexContainer from '../containers/index/IndexContainer';

const RouterWithRedux = connect()(Router);

const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : Platform.OS === 'android' ? 54 : 64;
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};

const App = () =>
  <RouterWithRedux getSceneStyle={getSceneStyle}>
    <Scene key="root">
      <Scene
        key="WelcomeContainer"
        component={WelcomeContainer}
        title="欢迎"
        hideNavBar
        hideTabBar
        initial
      />
      <Scene
        key="LoginContainer"
        component={LoginContainer}
        title="登录"
        hideNavBar={false}
        type={ActionConst.REPLACE}
        hideTabBar
      />
      <Scene
        key="IndexContainer"
        component={IndexContainer}
        title="首页"
        hideNavBar={false}
        type={ActionConst.REPLACE}
        hideTabBar
      />
    </Scene>
  </RouterWithRedux>;

export default App;
