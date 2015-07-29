import * as directions from '../constants/Directions';
import * as types from '../constants/ActionTypes';

let defaultState = {
  board: { width: 5, height: 3 },
  player: {
    position: { x: 0, y: 2 },
    direction: directions.SOUTH
  },
  blocks: [{ x: 2, y: 1 }, { x: 3, y: 0 }],
  diamonds: [{ x: 2, y: 0 }, { x: 4, y: 0 }],
  movesLeft: 10,
  macros: [
    [types.MOVE_FORWARD, types.MOVE_FORWARD, types.ROTATE_ANTICLOCKWISE],
    [types.MOVE_FORWARD, types.ROTATE_CLOCKWISE, types.MOVE_FORWARD]
  ]
};

export default function game(state = defaultState, action) {
  if (action.type === types.RESTART) {
    state = defaultState;
  }

  if (state.complete || state.failed) return state;

  let player;

  switch (action.type) {
    case types.EXEC_MACRO:
      let macroActions = state.macros[action.index];
      return macroActions.reduce((mstate, type) => {
        return game(mstate, { type });
      }, { ...state, movesLeft: state.movesLeft - 1 });

    case types.MOVE_FORWARD:
      let vector = directions.VECTORS[state.player.direction];
      player = {
        ...state.player,
        position: {
          x: state.player.position.x + vector.x,
          y: state.player.position.y + vector.y
        }
      };
      break;

    case types.ROTATE_CLOCKWISE:
      let rcIndex = (directions.ALL.indexOf(state.player.direction) + 1) % 4;
      player = {
        ...state.player,
        direction: directions.ALL[rcIndex]
      };
      break;

    case types.ROTATE_ANTICLOCKWISE:
      let racIndex = (directions.ALL.indexOf(state.player.direction) + 3) % 4;
      player = {
        ...state.player,
        direction: directions.ALL[racIndex]
      };
      break;

    default:
      player = state.player;
      break;
  }

  let movesLeft = action.isMove ? state.movesLeft - 1 : state.movesLeft;

  let validPosition = !(
    state.blocks.some(block =>
      block.x === player.position.x && block.y === player.position.y
    ) ||
    (player.position.x < 0) ||
    (player.position.x >= state.board.width) ||
    (player.position.y < 0) ||
    (player.position.y >= state.board.height)
  );

  let diamonds = state.diamonds.filter(diamond =>
    !(diamond.x === player.position.x && diamond.y === player.position.y)
  );

  return {
    ...state,
    player,
    movesLeft,
    validPosition,
    diamonds,
    failed: !validPosition || movesLeft === 0,
    complete: diamonds.length === 0
  };
}
