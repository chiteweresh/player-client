import React from 'react';
import './ControlsButton.scss';
import PropTypes from 'prop-types';
import play from '../../../svg/play.svg';
import pause from '../../../svg/pause.svg';
import forward from '../../../svg/forward.svg';
import rewind from '../../../svg/rewind.svg';

const ControlsButton = ({ onPlayPause, playing }) => (
  <div className="controls-button">
    <img src={forward} alt="pause" />
    <button type="button" className="play-button" onClick={onPlayPause}>
      {!playing ? (
        <img src={play} alt="play" />
      ) : (
        <img src={pause} alt="pause" />
      )}
    </button>
    <img src={rewind} alt="pause" />
  </div>
);

ControlsButton.propTypes = {
  onPlayPause: PropTypes.func.isRequired,
  playing: PropTypes.bool,
};
export default ControlsButton;
