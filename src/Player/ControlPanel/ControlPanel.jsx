import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { baseBorder, baseMargin, dimensions } from '../../style/theme';
import ControlsBar from './ControlBar/ControlBar';
import ProgressBar from './ProgressBar';

const ControlPanel = ({
  onPlayPause,
  playing,
  muted,
  onMute,
  onUpdateVolume,
  volume,
  duration,
  onUpdateProgress,
  currentTime,
  subtitleSwitch,
  subtitle,
}) => (
  <Container>
    <ProgressBar
      duration={duration}
      onUpdateProgress={onUpdateProgress}
      currentTime={currentTime}
    />
    <ControlsBar
      onPlayPause={onPlayPause}
      playing={playing}
      onMute={onMute}
      muted={muted}
      onUpdateVolume={onUpdateVolume}
      volume={volume}
      currentTime={currentTime}
      duration={duration}
      subtitleSwitch={subtitleSwitch}
      subtitle={subtitle}
    />
  </Container>
);

const Container = styled.div`
  width: ${dimensions.videoWidth};
  margin-left: ${baseMargin};
  position: relative;
  border: ${baseBorder};
  height: ${dimensions.controlPanelHeight};
`;

ControlPanel.propTypes = {
  currentTime: PropTypes.number,
  duration: PropTypes.number,
  onPlayPause: PropTypes.func.isRequired,
  muted: PropTypes.bool,
  onMute: PropTypes.func.isRequired,
  onUpdateProgress: PropTypes.func.isRequired,
  playing: PropTypes.bool,
  onUpdateVolume: PropTypes.func.isRequired,
  volume: PropTypes.number,
  subtitleSwitch: PropTypes.func.isRequired,
  subtitle: PropTypes.bool,
};
export default ControlPanel;
