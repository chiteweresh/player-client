import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { getDisplayTime, getShift } from '../../../utils/utils';
import './Progress.scss';

const Progress = ({ currentTime, duration, onUpdateProgress }) => {
  const progressRef = useRef(null);

  const setCurrentProgressLength = () => {
    if (currentTime) {
      return (currentTime / duration) * progressRef.current.offsetWidth;
    }
    return 0;
  };

  const onClickProgress = (e) => {
    const progressLength = progressRef.current.offsetWidth;
    const framesTime = (getShift(e, progressRef) / progressLength) * duration;
    onUpdateProgress(framesTime);
  };

  return (
    <div className="progress">
      <div className="time-display">
        <span>{getDisplayTime(currentTime)}</span>
        &nbsp;/&nbsp;
        <span>{getDisplayTime(duration)}</span>
      </div>
      <div className="progress-bar" ref={progressRef} onClick={onClickProgress}>
        <div
          className="current-progress"
          style={{ width: setCurrentProgressLength() }}
        />
      </div>
    </div>
  );
};

Progress.propTypes = {
  currentTime: PropTypes.number,
  duration: PropTypes.number,
  onUpdateProgress: PropTypes.func.isRequired,
};
export default Progress;
