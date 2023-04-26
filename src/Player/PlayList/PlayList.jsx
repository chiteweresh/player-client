import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { baseBorder, baseMargin, colors, dimensions } from '../../style/theme';

const PlayList = ({ currentSource, onUpdateSource }) => {
  const list = [1, 2, 3];

  return (
    <Container>
      {list.map((item) => (
        <PlayListItem
          type="button"
          key={item}
          active={item === currentSource}
          onClick={() => onUpdateSource(item)}
        >
          video {item}
        </PlayListItem>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: ${dimensions.videoWidth};
  margin-left: ${baseMargin};
  margin-top: ${baseMargin};
  border: ${baseBorder};
  display: inline-flex;
  align-items: center;
`;

const PlayListItem = styled.button`
  font-weight: bold;
  font-size: 1rem;
  margin: 9px;
  border: ${baseBorder};
  height: ${dimensions.buttonHeight};
  width: 75px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.active ? colors.activeItem : colors.background};
  cursor: pointer;
`;

PlayList.propTypes = {
  currentSource: PropTypes.number,
  onUpdateSource: PropTypes.func.isRequired,
};
export default PlayList;
