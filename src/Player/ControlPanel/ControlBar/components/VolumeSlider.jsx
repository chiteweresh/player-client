import React, { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors, dimensions } from '../../../../style/theme';
import { getShift } from '../../../../utils/utils';

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
  background-color: ${colors.background};
  height: ${dimensions.volumeBarHeight}px;
  margin-right: 10px;
  border-radius: 4px;
  width: ${dimensions.fullVolumeWidth}px;
  position: relative;
`;

const CurrentVolume = styled.div`
  background-color: ${colors.currentVolume};
  height: ${dimensions.volumeBarHeight}px;
  border-radius: 4px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Slider = styled.div`
  width: ${dimensions.sliderSize}px;
  height: ${dimensions.sliderSize}px;
  background-color: ${colors.white};
  border-radius: 50%;
  border: ${colors.background} 1px solid;
  position: absolute;
  top: -5px;
  z-index: 1;
`;

VolumeSlider.propTypes = {
  currentVolume: PropTypes.number,
  onUpdateVolume: PropTypes.func.isRequired,
};
export default VolumeSlider;
