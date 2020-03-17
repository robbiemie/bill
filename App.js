import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View,Text} from "react-native"
import { createStore,combineReducers } from 'redux';
import { Provider } from "react-redux";
import store from "./modules/redux/store"
import RootNavigator from "./modules/navigator/RootNavigator"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator/>
      </Provider>
      )
  }
}

export default App;