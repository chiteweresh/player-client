import React from 'react';
import PropTypes from 'prop-types';
import ControlsButton from './components/ControlsButton';
import Progress from './Progress/Progress';
import VolumePanel from './components/VolumePanel';
import './ControlsPanel.scss';

const ControlsPanel = ({
  currentTime,
  duration,
  muted,
  onMute,
  onPlayPause,
  onUpdateProgress,
  onUpdateVolume,
  playing,
}) => (
  <div className="controls-panel">
    <ControlsButton onPlayPause={onPlayPause} playing={playing} />
    <VolumePanel
      onMute={onMute}
      muted={muted}
      onUpdateVolume={onUpdateVolume}
    />
    <Progress
      currentTime={currentTime}
      duration={duration}
      onUpdateProgress={onUpdateProgress}
    />
  </div>
);

ControlsPanel.propTypes = {
  currentTime: PropTypes.number,
  duration: PropTypes.number,
  muted: PropTypes.bool,
  onMute: PropTypes.func.isRequired,
  onPlayPause: PropTypes.func.isRequired,
  onUpdateProgress: PropTypes.func.isRequired,
  onUpdateVolume: PropTypes.func.isRequired,
  playing: PropTypes.bool,
};
export default ControlsPanel;
