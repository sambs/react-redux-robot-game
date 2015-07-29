import React, { Component, PropTypes } from 'react';
import * as directions from '../constants/Directions';

const ICON_CLASSES = {
  [directions.NORTH]: 'fa fa-chevron-circle-up',
  [directions.EAST]: 'fa fa-chevron-circle-right',
  [directions.SOUTH]: 'fa fa-chevron-circle-down',
  [directions.WEST]: 'fa fa-chevron-circle-left',
}

export default class Player extends Component {

  static propTypes = {
    scale: PropTypes.number.isRequired,
    position: PropTypes.object.isRequired,
    direction: PropTypes.string.isRequired,
    validPosition: PropTypes.bool.isRequired
  };

  render() {
    const { position, direction, validPosition, scale } = this.props;

    const style = {
      width: scale,
      height: scale,
      lineHeight: scale+'px',
      bottom: scale * position.y,
      left: scale * position.x
    };

    return (
      <div className="player" style={style} >
        {this.renderIcon()}
      </div>
    );
  }

  renderIcon() {
    const { direction, validPosition } = this.props;
    if (validPosition) return <i className={ICON_CLASSES[direction]} />;
    else return <i className="invalid-position fa fa-times" />;
  }
}
