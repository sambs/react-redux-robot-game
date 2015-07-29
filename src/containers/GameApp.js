import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Game from '../components/Game';
import * as GameActions from '../actions/GameActions';

@connect(state => state)
export default class GameApp extends Component {
  render() {
    const { dispatch } = this.props;
    let props = {...this.props, ...bindActionCreators(GameActions, dispatch) };
    return (
      <Game {...props} />
    );
  }
}
