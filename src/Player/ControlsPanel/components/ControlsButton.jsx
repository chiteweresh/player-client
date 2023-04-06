import React from 'react';
import './ControlsButton.scss';
import PropTypes from 'prop-types';

const ControlsButton = ({ onPlayPause, playing }) => (
  <div className="controls-button">
    <button type="button" className="play-button" onClick={onPlayPause}>
      {
        !playing ? (
          <svg viewBox="0 0 36 36" height="100%">
            <path d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z" />
          </svg>
        ) : (
          <svg viewBox="0 0 36 36" height="100%">
            <path d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z" />
          </svg>
        )
      }

    </button>
  </div>
);

ControlsButton.propTypes = {
  onPlayPause: PropTypes.func.isRequired,
  playing: PropTypes.bool,
};
export default ControlsButton;
