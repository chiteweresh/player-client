import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SpeakerMuteBtn } from '../ControlButton';
import VolumeSlider from './components/VolumeSlider';

const VolumeControlBar = ({ onMute, muted, volume, onUpdateVolume }) => (
  <Container>
    <SpeakerMuteBtn onMute={onMute} muted={muted} volume={volume} />
    <VolumeSlider currentVolume={volume} onUpdateVolume={onUpdateVolume} />
  </Container>
);

const Container = styled.div`
  align-items: center;
  display: flex;
  position: absolute;
  right: 0;
`;

VolumeControlBar.propTypes = {
  onMute: PropTypes.func.isRequired,
  muted: PropTypes.bool,
  volume: PropTypes.number,
  onUpdateVolume: PropTypes.func.isRequired,
};

export default VolumeControlBar;
