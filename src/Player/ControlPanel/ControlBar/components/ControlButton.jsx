import PropTypes from 'prop-types';
import React from 'react';
import { ReactComponent as Pause } from '../../../../svg/pause.svg';
import { ReactComponent as Play } from '../../../../svg/play.svg';
import { ReactComponent as Forward } from '../../../../svg/forward.svg';
import { ReactComponent as Rewind } from '../../../../svg/rewind.svg';
import { ReactComponent as Speaker } from '../../../../svg/speaker.svg';
import { ReactComponent as Mute } from '../../../../svg/mute.svg';
import { ReactComponent as Subtitle } from '../../../../svg/subtitle.svg';
import ControlBtn from '../../../../utils/buttons';

export const PlayPauseBtn = ({ onPlayPause, playing }) => {
  return (
    <ControlBtn type="button" onClick={onPlayPause}>
      {playing ? <Pause /> : <Play />}
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
      <Forward />
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
      <Rewind />
    </ControlBtn>
  );
};

export const SpeakerMuteBtn = ({ onMute, muted, volume }) => (
  <ControlBtn type="button" onClick={onMute}>
    {muted || volume === 0 ? <Mute /> : <Speaker />}
  </ControlBtn>
);

export const SubtitleBtn = ({ subtitle, subtitleSwitch }) => (
  <ControlBtn type="button" onClick={subtitleSwitch}>
    <Subtitle fill={subtitle ? 'black' : 'lightgray'} />
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
