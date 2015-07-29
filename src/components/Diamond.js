import React, { Component, PropTypes } from 'react';

export default class Diamond extends Component {

  static propTypes = {
    scale: PropTypes.number.isRequired,
    position: PropTypes.object.isRequired
  };

  render() {
    const { position, scale } = this.props;

    const style = {
      width: scale,
      height: scale,
      bottom: scale * position.y,
      left: scale * position.x,
      lineHeight: scale+'px',
    };

    return (
      <div className="diamond" style={style}>
        <i className="fa fa-diamond" />
      </div>
    );
  }
}
