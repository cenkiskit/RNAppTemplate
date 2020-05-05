/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import { Router } from './src/router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import reducers from './src/reducers'
import ReduxThunk from 'redux-thunk'


export const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
console.disableYellowBox = true
export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
};

AppRegistry.registerComponent('App', () => App);