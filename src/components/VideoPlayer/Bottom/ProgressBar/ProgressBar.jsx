import React, { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors, dimensions } from '../../../../style/theme';
import { getShift } from '../../../../utils/utils';

const ProgressBar = ({ currentTime, duration, onUpdateProgress }) => {
  const progressRef = useRef(null);
  const onClickProgress = (e) => {
    const progressWidth = progressRef.current.offsetWidth;
    const framesTime = (getShift(e, progressRef) / progressWidth) * duration;
    onUpdateProgress(framesTime);
  };
  const setCurrentProgressWidth = () => {
    if (currentTime) {
      return (currentTime / duration) * progressRef.current.offsetWidth;
    }
    return 0;
  };
  return (
    <Progress ref={progressRef} onClick={onClickProgress}>
      <CurrentProgress style={{ width: setCurrentProgressWidth() }} />
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
  background-color: ${colors.currentProgress};
  position: absolute;
  top: 0;
  left: 0;
  transition: width 450ms;
`;

ProgressBar.propTypes = {
  currentTime: PropTypes.number,
  duration: PropTypes.number,
  onUpdateProgress: PropTypes.func.isRequired,
};

export default ProgressBar;
