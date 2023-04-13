import PropTypes from 'prop-types';
import React from 'react';
import pause from '../../../../svg/pause.svg';
import play from '../../../../svg/play.svg';
import forward from '../../../../svg/forward.svg';
import rewind from '../../../../svg/rewind.svg';
import speaker from '../../../../svg/speaker.svg';
import mute from '../../../../svg/mute.svg';
import subtitleOn from '../../../../svg/subtitleOn.svg';
import subtitleOff from '../../../../svg/subtitleOff.svg';
import ControlBtn from '../../../../utils/buttons';

export const PlayPauseBtn = ({ onPlayPause, playing }) => {
  return (
    <ControlBtn type="button" onClick={onPlayPause}>
      <img src={playing ? pause : play} alt="play" />
    </ControlBtn>
  );
};

export const ForwardBtn = ({ currentTime, onUpdateProgress, duration }) => {
  const onClick = () => {
    if (currentTime <= duration - 5) {
      onUpdateProgress(currentTime + 5);
    } else onUpdateProgress(duration);
  };
  return (
    <ControlBtn type="button" onClick={onClick}>
      <img src={forward} alt="forward" />
    </ControlBtn>
  );
};

export const RewindBtn = ({ currentTime, onUpdateProgress }) => {
  const onClick = () => {
    if (currentTime >= 5) {
      onUpdateProgress(currentTime - 5);
    } else onUpdateProgress(0);
  };
  return (
    <ControlBtn type="button" onClick={onClick}>
      <img src={rewind} alt="rewind" />
    </ControlBtn>
  );
};

export const SpeakerMuteBtn = ({ onMute, muted, volume }) => (
  <ControlBtn type="button" onClick={onMute}>
    <img src={muted || volume === 0 ? mute : speaker} alt="mute" />
  </ControlBtn>
);

export const SubtitleBtn = ({ subtitle, subtitleSwitch }) => (
  <ControlBtn type="button" onClick={subtitleSwitch}>
    <img src={subtitle ? subtitleOn : subtitleOff} alt="subtitle" />
  </ControlBtn>
);

PlayPauseBtn.propTypes = {
  onPlayPause: PropTypes.func.isRequired,
  playing: PropTypes.bool,
};

ForwardBtn.propTypes = {
  currentTime: PropTypes.number,
  onUpdateProgress: PropTypes.func.isRequired,
  duration: PropTypes.number,
};

RewindBtn.propTypes = {
  currentTime: PropTypes.number,
  onUpdateProgress: PropTypes.func.isRequired,
};

SpeakerMuteBtn.propTypes = {
  onMute: PropTypes.func.isRequired,
  muted: PropTypes.bool,
  volume: PropTypes.number,
};

SubtitleBtn.propTypes = {
  subtitleSwitch: PropTypes.func.isRequired,
  subtitle: PropTypes.bool,
};
