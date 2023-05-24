import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SpeakerMuteButton } from '../ControlButton';
import VolumeSlider from './VolumeSlider';

const VolumePanel = ({ onMute, muted, volume, onUpdateVolume }) => (
  <VolumeContainer>
    <SpeakerMuteButton onMute={onMute} muted={muted} volume={volume} />
    <VolumeSlider currentVolume={volume} onUpdateVolume={onUpdateVolume} />
  </VolumeContainer>
);

const VolumeContainer = styled.div`
  align-items: center;
  display: flex;
  position: absolute;
  right: 0;
`;

VolumePanel.propTypes = {
  onMute: PropTypes.func.isRequired,
  muted: PropTypes.bool,
  volume: PropTypes.number,
  onUpdateVolume: PropTypes.func.isRequired,
};

export default VolumePanel;
