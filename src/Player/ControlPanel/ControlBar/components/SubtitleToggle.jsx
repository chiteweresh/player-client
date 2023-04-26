import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SubtitleBtn } from './ControlButton';

const SubtitleToggle = ({ subtitle, subtitleSwitch }) => {
  return (
    <Wrapper>
      <SubtitleBtn subtitle={subtitle} subtitleSwitch={subtitleSwitch} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  right: -160px;
`;

SubtitleToggle.propTypes = {
  subtitleSwitch: PropTypes.func.isRequired,
  subtitle: PropTypes.bool,
};

export default SubtitleToggle;
