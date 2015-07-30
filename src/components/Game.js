import React, { Component, PropTypes } from 'react';
import Board from './Board';
import Status from './Status';
import MacroInput from './MacroInput';
import RestartButton from './RestartButton';

export default class Game extends Component {
  static defaultProps = {
    scale: 50
  };

  static propTypes = {
    board: PropTypes.object.isRequired,
    player: PropTypes.object.isRequired,
    macros: PropTypes.array.isRequired,
    validPosition: PropTypes.bool.isRequired,
    complete: PropTypes.bool.isRequired,
    failed: PropTypes.bool.isRequired,
    movesLeft: PropTypes.number.isRequired,
    moveForward: PropTypes.func.isRequired,
    rotateClockwise: PropTypes.func.isRequired,
    rotateAnticlockwise: PropTypes.func.isRequired,
    execMacro: PropTypes.func.isRequired,
    restart: PropTypes.func.isRequired
  };

  render() {
    const {
      board,
      player,
      blocks,
      diamonds,
      validPosition,
      scale,
      macros,
      complete,
      failed,
      movesLeft,
      moveForward,
      rotateClockwise,
      rotateAnticlockwise,
      execMacro,
      defineMacro,
      restart,
    } = this.props;

    const gameStyle = {
      width: scale * board.width
    };

    const macroInputDisabled = movesLeft < 10;

    return (
      <div className="game" style={gameStyle}>
        <h1>Robot</h1>
        <RestartButton complete={complete} failed={failed} restart={restart} />
        <Board size={board}
               scale={scale}
               player={player}
               validPosition={validPosition}
               diamonds={diamonds}
               blocks={blocks}
               movesLeft={movesLeft}
               moveForward={moveForward}
               rotateClockwise={rotateClockwise}
               rotateAnticlockwise={rotateAnticlockwise}
               execMacro={execMacro}
               restart={restart} />
        {macros.map((macro, index) => {
          return <MacroInput index={index}
                             key={index}
                             value={macro}
                             defineMacro={defineMacro}
                             disabled={macroInputDisabled}
                             autoFocus={index === 0} />;
        })}
        <Status complete={complete} failed={failed} movesLeft={movesLeft} />
      </div>
    );
  }
}
