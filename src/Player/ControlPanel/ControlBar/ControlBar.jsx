import React from 'react';
import PropTypes from 'prop-types';
import {
  ForwardBtn,
  PlayPauseBtn,
  RewindBtn,
} from './components/ControlButton';
import VolumeControlBar from './VolumeControlBar';
import TimeDisplay from './components/TimeDisplay';

const ControlsBar = ({
  onPlayPause,
  playing,
  onMute,
  muted,
  onUpdateVolume,
  volume,
  currentTime,
  duration,
}) => (
  <>
    <ForwardBtn />
    <PlayPauseBtn onPlayPause={onPlayPause} playing={playing} />
    <RewindBtn />
    <TimeDisplay currentTime={currentTime} duration={duration} />
    <VolumeControlBar
      onMute={onMute}
      muted={muted}
      onUpdateVolume={onUpdateVolume}
      volume={volume}
    />
  </>
);

ControlsBar.propTypes = {
  onPlayPause: PropTypes.func.isRequired,
  playing: PropTypes.bool,
  muted: PropTypes.bool,
  onMute: PropTypes.func.isRequired,
  onUpdateVolume: PropTypes.func.isRequired,
  volume: PropTypes.number,
  currentTime: PropTypes.number,
  duration: PropTypes.number,
};
export default ControlsBar;
