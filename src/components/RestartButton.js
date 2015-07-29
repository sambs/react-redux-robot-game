import React, { Component, PropTypes } from 'react';

export default class RestartButton extends Component {

  static propTypes = {
    complete: PropTypes.bool.isRequired,
    failed: PropTypes.bool.isRequired,
    restart: PropTypes.func.isRequired
  };

  render() {
    const { failed, complete, restart} = this.props;

    if (failed || complete) {
      return (
        <button className="restart-button" onClick={restart}>
          { failed ? 'Retry' : 'Replay' }
        </button>
      );
    }
    return null;
  }
}
