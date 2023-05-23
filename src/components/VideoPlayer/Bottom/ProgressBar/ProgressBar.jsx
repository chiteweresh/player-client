import React, { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors, dimensions } from '../../../../style/theme';
import { getShift } from '../../../../utils/utils';

const ProgressBar = ({ currentTime, duration, onSeek, ad }) => {
  const progressRef = useRef(null);
  const onClickProgress = (e) => {
    const progressWidth = progressRef.current.offsetWidth;
    const framesTime = (getShift(e, progressRef) / progressWidth) * duration;
    onSeek(framesTime);
  };
  const setCurrentProgressWidth = () => {
    return currentTime && currentTime <= duration
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
  background-color: ${colors.background};
  height: ${dimensions.progressHeight}px;
  width: ${dimensions.progressWidth}px;
`;

const CurrentProgress = styled.div`
  height: ${dimensions.progressHeight}px;
  background-color: ${(props) =>
    props.ad ? colors.adProgress : colors.videoProgress};
  position: absolute;
  top: 0;
  left: 0;
  transition: width 450ms;
`;

ProgressBar.propTypes = {
  currentTime: PropTypes.number,
  duration: PropTypes.number,
  onSeek: PropTypes.func.isRequired,
  ad: PropTypes.bool,
};

export default ProgressBar;
