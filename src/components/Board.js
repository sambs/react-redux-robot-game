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
    validPosition: PropTypes.bool.isRequired
  };

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
