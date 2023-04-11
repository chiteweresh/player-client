import React, { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors, dimensions } from '../../style/theme';
import { getShift } from '../../utils/utils';

const ProgressBar = ({ currentTime, duration, onUpdateProgress }) => {
  const progressRef = useRef(null);
  const onClickProgress = (e) => {
    const progressWidth = progressRef.current.offsetWidth;
    const framesTime = (getShift(e, progressRef) / progressWidth) * duration;
    onUpdateProgress(framesTime);
  };
  const setCurrentProgressWidth = () => {
    return (currentTime / duration) * progressRef.current.offsetWidth;
  };
  return (
    <Progress2 ref={progressRef} onClick={onClickProgress}>
      <CurrentProgress
        style={{ width: currentTime ? setCurrentProgressWidth() : 0 }}
      />
    </Progress2>
  );
};

const Progress2 = styled.div`
  position: relative;
  background-color: ${colors.background};
  height: ${dimensions.progressHeight};
  width: ${dimensions.progressWidth};
`;

const CurrentProgress = styled.div`
  height: ${dimensions.progressHeight};
  width: 20px;
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
