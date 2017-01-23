import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Provider } from 'react-redux';
import { default as configureStore } from './store/createStore';
import Index from './router/App';

const store = configureStore();

const App = () => <Provider store={store}>
  <Index />
</Provider>;


AppRegistry.registerComponent('AwesomeProject', () => App);
