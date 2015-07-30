import React, { Component, PropTypes } from 'react';
import Player from './Player';
import Diamond from './Diamond';
import Block from './Block';

export default class Board extends Component {

  static propTypes = {
    scale: PropTypes.number.isRequired,
    size: PropTypes.object.isRequired,
    player: PropTypes.object.isRequired,
    blocks: PropTypes.array.isRequired,
    diamonds: PropTypes.array.isRequired,
    validPosition: PropTypes.bool.isRequired,
    movesLeft: PropTypes.number.isRequired,
    moveForward: PropTypes.func.isRequired,
    rotateClockwise: PropTypes.func.isRequired,
    rotateAnticlockwise: PropTypes.func.isRequired,
    execMacro: PropTypes.func.isRequired,
    restart: PropTypes.func.isRequired
  };

  handleKeyPress(e) {
    switch (e.which) {
      case 38: // up
        this.props.moveForward();
        break;
      case 39: // right
        this.props.rotateClockwise();
        break;
      case 37: // left
        this.props.rotateAnticlockwise();
        break;
      case 49: // 1
        this.props.execMacro(0);
        break;
      case 50: // 2
        this.props.execMacro(1);
        break;
      case 82: // R
        this.props.restart(1);
        break;
      default:
        break;
    }
  }

  componentWillMount() {
    window.onkeydown = ::this.handleKeyPress;
  }

  componentWillUnmount() {
    window.onkeydown = void 0;
  }

  render() {
    const {
      size,
      player,
      blocks,
      diamonds,
      validPosition,
      scale
    } = this.props;

    const boardStyle = {
      height: scale * size.height
    };

    return (
      <div className="board" style={boardStyle}>
        {diamonds.map((diamond, index) =>
          <Diamond key={'diamond' + index} position={diamond} scale={scale} />
        )}
        {blocks.map((block, index) =>
          <Block key={'block' + index} position={block} scale={scale} />
        )}
        <Player position={player.position}
                direction={player.direction}
                validPosition={validPosition}
                scale={scale} />
      </div>
    );
  }
}
