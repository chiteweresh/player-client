import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { dimensions } from '../../../../style/theme';
import { getDisplayTime } from '../../../../utils/utils';

const TimeDisplay = ({ currentTime, duration }) => {
  return (
    <Wrapper>
      <span>{getDisplayTime(currentTime)}</span>
      &nbsp;/&nbsp;
      <span>{getDisplayTime(duration)}</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: ${dimensions.buttonHeight};
  width: 150px;
  float: left;
  padding: 0 10px;
  display: flex;
  align-items: center;
`;

TimeDisplay.propTypes = {
  currentTime: PropTypes.number,
  duration: PropTypes.number,
};

export default TimeDisplay;
