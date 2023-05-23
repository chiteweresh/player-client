import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { baseBorder, dimensions } from '../../../style/theme';
import Controls from './Controls/Controls';
import ProgressBar from './ProgressBar/ProgressBar';

const Bottom = ({
  onPlayPause,
  playing,
  muted,
  onMute,
  onUpdateVolume,
  volume,
  duration,
  onSeek,
  currentTime,
  onSwitchSubtitle,
  subtitle,
  ad,
}) => {
  return (
    <Container>
      <ProgressBar
        duration={duration}
        onSeek={onSeek}
        currentTime={currentTime}
        ad={ad}
      />
      <Controls
        ad={ad}
        onPlayPause={onPlayPause}
        playing={playing}
        onMute={onMute}
        muted={muted}
        onUpdateVolume={onUpdateVolume}
        volume={volume}
        currentTime={currentTime}
        duration={duration}
        onSwitchSubtitle={onSwitchSubtitle}
        subtitle={subtitle}
        onSeek={onSeek}
      />
    </Container>
  );
};

const Container = styled.div`
  width: ${dimensions.videoWidth}px;
  margin: auto;
  position: relative;
  border: ${baseBorder};
  height: ${dimensions.controlPanelHeight}px;
`;

Bottom.propTypes = {
  currentTime: PropTypes.number,
  duration: PropTypes.number,
  onPlayPause: PropTypes.func.isRequired,
  muted: PropTypes.bool,
  onMute: PropTypes.func.isRequired,
  onSeek: PropTypes.func.isRequired,
  playing: PropTypes.bool,
  onUpdateVolume: PropTypes.func.isRequired,
  volume: PropTypes.number,
  onSwitchSubtitle: PropTypes.func.isRequired,
  subtitle: PropTypes.bool,
  ad: PropTypes.bool,
};
export default Bottom;
