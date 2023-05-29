import React, { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { COLORS, VIDEO_DIMENSIONS } from '../../../../../../style/theme';
import { getShift } from '../../../../../../utils/utils';

const VolumeSlider = ({ currentVolume, onUpdateVolume }) => {
  const volumeRef = useRef(null);
  let volumeDisplayWidth = currentVolume * 100;
  const sliderDisplayWidth = volumeDisplayWidth - 7.5;

  const changeVolume = (e) => {
    const shift = getShift(e, volumeRef);
    const volumeLength = volumeRef.current.offsetWidth;
    const volume = shift / volumeLength;
    if (volume >= 0 && volume <= 1) {
      onUpdateVolume(volume);
      volumeDisplayWidth = shift;
    }
  };

  const onDragSlider = () => {
    document.addEventListener('mousemove', changeVolume);
    document.addEventListener('mouseup', () =>
      document.removeEventListener('mousemove', changeVolume)
    );
  };
  return (
    <VolumeBar ref={volumeRef} onClick={changeVolume}>
      <CurrentVolume style={{ width: volumeDisplayWidth }} />
      <Slider onMouseDown={onDragSlider} style={{ left: sliderDisplayWidth }} />
    </VolumeBar>
  );
};

const VolumeBar = styled.div`
  background-color: ${COLORS.background};
  height: ${VIDEO_DIMENSIONS.volumeBarHeight}px;
  margin-right: 10px;
  border-radius: 4px;
  width: ${VIDEO_DIMENSIONS.fullVolumeWidth}px;
  position: relative;
`;

const CurrentVolume = styled.div`
  background-color: ${COLORS.currentVolume};
  height: ${VIDEO_DIMENSIONS.volumeBarHeight}px;
  border-radius: 4px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Slider = styled.div`
  width: ${VIDEO_DIMENSIONS.sliderSize}px;
  height: ${VIDEO_DIMENSIONS.sliderSize}px;
  background-color: ${COLORS.white};
  border-radius: 50%;
  border: ${COLORS.background} 1px solid;
  position: absolute;
  top: -5px;
  z-index: 1;
`;

VolumeSlider.propTypes = {
  currentVolume: PropTypes.number,
  onUpdateVolume: PropTypes.func.isRequired,
};
export default VolumeSlider;
