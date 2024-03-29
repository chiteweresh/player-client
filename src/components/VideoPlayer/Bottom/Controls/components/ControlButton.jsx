import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as Pause } from '../../../../../svg/pause.svg';
import { ReactComponent as Play } from '../../../../../svg/play.svg';
import { ReactComponent as Forward } from '../../../../../svg/forward.svg';
import { ReactComponent as Rewind } from '../../../../../svg/rewind.svg';
import { ReactComponent as Speaker } from '../../../../../svg/speaker.svg';
import { ReactComponent as Mute } from '../../../../../svg/mute.svg';
import { ReactComponent as Subtitle } from '../../../../../svg/subtitle.svg';
import { COLORS, VIDEO_DIMENSIONS } from '../../../../../style/theme';

const ControlButton = styled.button`
  float: left;
  background-color: transparent;
  border: none;
  height: ${VIDEO_DIMENSIONS.buttonHeight}px;
  padding: 0 0 0 1px;
  box-sizing: content-box;
  cursor: pointer;
  margin-right: 5px;
`;

export const PlayPauseButton = ({ onPlayPause, playing }) => {
  return (
    <ControlButton type="button" onClick={onPlayPause}>
      {playing ? <Pause /> : <Play />}
    </ControlButton>
  );
};

export const ForwardButton = ({ currentTime, onSeek, duration }) => {
  const onClick = () => {
    if (currentTime <= duration - 5) {
      onSeek(currentTime + 5);
    } else onSeek(duration);
  };
  return (
    <ControlButton type="button" onClick={onClick}>
      <Forward />
    </ControlButton>
  );
};

export const RewindButton = ({ currentTime, onSeek }) => {
  const onClick = () => {
    if (currentTime >= 5) {
      onSeek(currentTime - 5);
    } else onSeek(0);
  };
  return (
    <ControlButton type="button" onClick={onClick}>
      <Rewind />
    </ControlButton>
  );
};

export const SpeakerMuteButton = ({ onMute, muted, volume }) => (
  <ControlButton type="button" onClick={onMute}>
    {muted || volume === 0 ? <Mute /> : <Speaker />}
  </ControlButton>
);

export const SubtitleToggle = ({ subtitle, onSwitchSubtitle }) => (
  <ControlButton type="button" onClick={onSwitchSubtitle}>
    <Subtitle fill={subtitle ? COLORS.black : COLORS.background} />
  </ControlButton>
);

PlayPauseButton.propTypes = {
  onPlayPause: PropTypes.func.isRequired,
  playing: PropTypes.bool,
};

ForwardButton.propTypes = {
  currentTime: PropTypes.number,
  onSeek: PropTypes.func.isRequired,
  duration: PropTypes.number,
};

RewindButton.propTypes = {
  currentTime: PropTypes.number,
  onSeek: PropTypes.func.isRequired,
};

SpeakerMuteButton.propTypes = {
  onMute: PropTypes.func.isRequired,
  muted: PropTypes.bool,
  volume: PropTypes.number,
};

SubtitleToggle.propTypes = {
  onSwitchSubtitle: PropTypes.func.isRequired,
  subtitle: PropTypes.bool,
};
