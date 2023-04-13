import React from 'react';
import PropTypes from 'prop-types';
import {
  ForwardBtn,
  PlayPauseBtn,
  RewindBtn,
} from './components/ControlButton';
import VolumeControlBar from './VolumeControlBar';
import TimeDisplay from './components/TimeDisplay';
import SubtitleToggle from './components/SubtitleToggle';

const ControlsBar = ({
  onPlayPause,
  playing,
  onMute,
  muted,
  onUpdateVolume,
  volume,
  currentTime,
  duration,
  subtitleSwitch,
  subtitle,
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
    <SubtitleToggle subtitle={subtitle} subtitleSwitch={subtitleSwitch} />
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
  subtitleSwitch: PropTypes.func.isRequired,
  subtitle: PropTypes.bool,
};
export default ControlsBar;
