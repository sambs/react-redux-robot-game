import React, { Component, PropTypes } from 'react';
import * as types from '../constants/ActionTypes';

const MOVE_SYMBOLS = {
  [types.MOVE_FORWARD]: '\uf139',
  [types.ROTATE_CLOCKWISE]: '\uf138',
  [types.ROTATE_ANTICLOCKWISE]: '\uf137'
};

export default class MacroInput extends Component {

  static propTypes = {
    value: PropTypes.array.isRequired,
    defineMacro: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    disabled: PropTypes.bool.isRequired,
    autoFocus: PropTypes.bool
  };

  handleKeyDown(e) {
    const { value, defineMacro, index } = this.props;

    switch (e.which) {
      case 38: // up
        e.stopPropagation();
        e.preventDefault();
        if (value.length >= 4) return;
        defineMacro(index, [...value, types.MOVE_FORWARD]);
        break;
      case 39: // right
        e.stopPropagation();
        e.preventDefault();
        if (value.length >= 4) return;
        defineMacro(index, [...value, types.ROTATE_CLOCKWISE]);
        break;
      case 37: // left
        e.stopPropagation();
        e.preventDefault();
        if (value.length >= 4) return;
        defineMacro(index, [...value, types.ROTATE_ANTICLOCKWISE]);
        break;
      case 8: // delete
        e.stopPropagation();
        defineMacro(index, value.slice(0, -1));
        break;
      case 49: // 1
      case 50: // 2
      case 82: // R
        e.stopPropagation();
        break;
      default:
        break;
    }
  }

  render() {
    const { index, disabled, value, autoFocus } = this.props;

    const id = `macro-input-${index}`;
    const placeholder = `Enter macro`;

    const display = value.map((move) => {
      return MOVE_SYMBOLS[move] + ' ';
    }).join('');

    return (
      <div className="macro-input">
        <label htmlFor={id} className="macro-input-label">
          Macro {index + 1}:&nbsp;
        </label>
        <input id={id}
               className="macro-input-input"
               placeholder="Enter macro"
               disabled={disabled}
               value={display}
               onKeyDown={::this.handleKeyDown}
               autoFocus={autoFocus}
               title="Can't be changed during the game" />
      </div>
    );
  }
}
