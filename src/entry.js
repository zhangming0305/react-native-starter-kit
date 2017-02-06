import React from 'react';
import { Provider } from 'react-redux';
import codePush from 'react-native-code-push';

import { default as configureStore } from './store/createStore';
import Index from './router/App';

const store = configureStore();

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    codePush.sync();
  }

  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}


const codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

export default codePush(codePushOptions)(App);
