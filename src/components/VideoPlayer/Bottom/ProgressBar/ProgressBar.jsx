import React, { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { COLORS, VIDEO_DIMENSIONS } from '../../../../style/theme';
import { getShift } from '../../../../utils/utils';

const ProgressBar = ({ currentTime, duration, onSeek, ad }) => {
  const progressRef = useRef(null);
  const onClickProgress = (e) => {
    const progressWidth = progressRef.current.offsetWidth;
    const framesTime = (getShift(e, progressRef) / progressWidth) * duration;
    onSeek(framesTime);
  };
  const setCurrentProgressWidth = () => {
    return currentTime && currentTime <= duration && duration > 0
      ? (currentTime / duration) * progressRef.current.offsetWidth
      : 0;
  };
  return (
    <Progress ref={progressRef} onClick={ad ? null : onClickProgress}>
      <CurrentProgress style={{ width: setCurrentProgressWidth() }} ad={ad} />
    </Progress>
  );
};

const Progress = styled.div`
  position: relative;
  background-color: ${COLORS.background};
  height: ${VIDEO_DIMENSIONS.progressHeight}px;
  width: ${VIDEO_DIMENSIONS.progressWidth}px;
`;

const CurrentProgress = styled.div`
  height: ${VIDEO_DIMENSIONS.progressHeight}px;
  background-color: ${(props) =>
    props.ad ? COLORS.adProgress : COLORS.videoProgress};
  position: absolute;
  top: 0;
  left: 0;
`;

ProgressBar.propTypes = {
  currentTime: PropTypes.number,
  duration: PropTypes.number,
  onSeek: PropTypes.func.isRequired,
  ad: PropTypes.bool,
};

export default ProgressBar;
