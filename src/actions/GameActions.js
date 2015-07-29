import * as types from '../constants/ActionTypes';

export function moveForward() {
  return {
    type: types.MOVE_FORWARD,
    isMove: true
  };
}

export function rotateClockwise() {
  return {
    type: types.ROTATE_CLOCKWISE,
    isMove: true
  };
}

export function rotateAnticlockwise() {
  return {
    type: types.ROTATE_ANTICLOCKWISE,
    isMove: true
  };
}

export function execMacro(index) {
  return {
    type: types.EXEC_MACRO,
    index: index,
    isMove: true
  };
}

export function restart() {
  return {
    type: types.RESTART
  };
}

