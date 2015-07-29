import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class Status extends Component {

  static propTypes = {
    complete: PropTypes.bool.isRequired,
    failed: PropTypes.bool.isRequired,
    movesLeft: PropTypes.number.isRequired
  };

  render() {
    const { complete, failed, movesLeft } = this.props;

    const className = classnames({
      'status': true,
      'game-over': failed
    });

    const movesLeftText = `${movesLeft} moves remaining`;

    if (complete) return <div className={className}>You did it!<br/>({movesLeftText})</div>;
    else if (!movesLeft) return <div className={className}>Out of moves!</div>;
    else if (!failed) return <div className={className}>{movesLeftText}</div>;
    else return <div className={className}>Game Over!</div>;
  }
}
