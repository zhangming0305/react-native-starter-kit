import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import WelcomeContainer from './welcome/Containers';
import LoginContainer from './login/LoginContainer';
import IndexContainer from './index/IndexContainer';

const App = () =>
  <Router>
    <Scene key="root">
      <Scene key="WelcomeContainer" component={WelcomeContainer} title="欢迎" hideNavBar initial />
      <Scene key="LoginContainer" component={LoginContainer} title="登录" hideNavBar />
      <Scene key="IndexContainer" component={IndexContainer} title="生活" hideNavBar={false} />
    </Scene>
  </Router>;

export default App;
