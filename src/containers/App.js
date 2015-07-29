import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { game } from '../reducers';
import GameApp from './GameApp';

const store = applyMiddleware(thunk)(createStore)(game);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <GameApp />}
      </Provider>
    );
  }
}
