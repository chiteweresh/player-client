import React from 'react';
import PropTypes from 'prop-types';
import {
  ForwardButton,
  PlayPauseButton,
  RewindButton,
  SubtitleToggle,
} from './components/ControlButton';
import VolumePanel from './components/VolumePanel/VolumePanel';
import TimeDisplay from './components/TimeDisplay';

const Controls = ({
  onPlayPause,
  playing,
  onMute,
  muted,
  onUpdateVolume,
  volume,
  currentTime,
  onSeek,
  duration,
  onSwitchSubtitle,
  subtitle,
  ad,
}) => {
  return (
    <>
      {!ad && <RewindButton currentTime={currentTime} onSeek={onSeek} />}
      <PlayPauseButton onPlayPause={onPlayPause} playing={playing} />
      {!ad && (
        <ForwardButton
          currentTime={currentTime}
          onSeek={onSeek}
          duration={duration}
        />
      )}
      {!ad && (
        <SubtitleToggle
          subtitle={subtitle}
          onSwitchSubtitle={onSwitchSubtitle}
        />
      )}
      <TimeDisplay currentTime={currentTime} duration={duration} />
      <VolumePanel
        onMute={onMute}
        muted={muted}
        onUpdateVolume={onUpdateVolume}
        volume={volume}
      />
    </>
  );
};

Controls.propTypes = {
  onPlayPause: PropTypes.func.isRequired,
  playing: PropTypes.bool,
  muted: PropTypes.bool,
  onMute: PropTypes.func.isRequired,
  onUpdateVolume: PropTypes.func.isRequired,
  volume: PropTypes.number,
  currentTime: PropTypes.number,
  duration: PropTypes.number,
  onSwitchSubtitle: PropTypes.func.isRequired,
  subtitle: PropTypes.bool,
  onSeek: PropTypes.func.isRequired,
  ad: PropTypes.bool,
};
export default Controls;
