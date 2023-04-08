import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { getShift } from '../../../utils/utils';
import './VolumePanel.scss';
import speaker from '../../../svg/speaker.svg';
import mute from '../../../svg/mute.svg';

const VolumePanel = ({ onMute, muted, onUpdateVolume }) => {
  const [volumeDisplay, setVolumeDisplay] = useState(50);
  const volumeRef = useRef(null);

  const changeVolume = (e) => {
    const shift = getShift(e, volumeRef);
    const volumeLength = volumeRef.current.offsetWidth;
    const currentVolume = shift / volumeLength;
    if (currentVolume >= 0 && currentVolume <= 1) {
      onUpdateVolume(currentVolume);
      setVolumeDisplay(shift);
    }
  };

  const onDragSlider = () => {
    document.addEventListener('mousemove', changeVolume);
    document.addEventListener('mouseup', () =>
      document.removeEventListener('mousemove', changeVolume)
    );
  };

  return (
    <div className="volume-panel">
      <button type="button" className="volume-speaker" onClick={onMute}>
        {muted || volumeDisplay === 0 ? (
          <img src={mute} alt="mute" />
        ) : (
          <img src={speaker} alt="speaker" />
        )}
      </button>
      <div className="volume-bar" ref={volumeRef} onClick={changeVolume}>
        <div
          className="slider"
          style={{ left: volumeDisplay - 7.5 }}
          onMouseDown={onDragSlider}
        />
        <div className="current-volume" style={{ width: volumeDisplay }} />
      </div>
    </div>
  );
};

VolumePanel.propTypes = {
  onMute: PropTypes.func.isRequired,
  muted: PropTypes.bool,
  onUpdateVolume: PropTypes.func.isRequired,
};

export default VolumePanel;
