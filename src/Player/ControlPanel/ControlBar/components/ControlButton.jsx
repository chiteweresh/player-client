import PropTypes from 'prop-types';
import React from 'react';
import pause from '../../../../svg/pause.svg';
import play from '../../../../svg/play.svg';
import forward from '../../../../svg/forward.svg';
import rewind from '../../../../svg/rewind.svg';
import speaker from '../../../../svg/speaker.svg';
import mute from '../../../../svg/mute.svg';
import ControlBtn from '../../../../utils/buttons';

export const PlayPauseBtn = ({ onPlayPause, playing }) => {
  return (
    <ControlBtn type="button" onClick={onPlayPause}>
      <img src={playing ? pause : play} alt="play" />
    </ControlBtn>
  );
};

export const ForwardBtn = () => (
  <ControlBtn type="button">
    <img src={forward} alt="forward" />
  </ControlBtn>
);

export const RewindBtn = () => (
  <ControlBtn type="button">
    <img src={rewind} alt="rewind" />
  </ControlBtn>
);

export const SpeakerMuteBtn = ({ onMute, muted, volume }) => (
  <ControlBtn type="button" onClick={onMute}>
    <img src={muted || volume === 0 ? mute : speaker} alt="mute" />
  </ControlBtn>
);

PlayPauseBtn.propTypes = {
  onPlayPause: PropTypes.func.isRequired,
  playing: PropTypes.bool,
};

SpeakerMuteBtn.propTypes = {
  onMute: PropTypes.func.isRequired,
  muted: PropTypes.bool,
  volume: PropTypes.number,
};
