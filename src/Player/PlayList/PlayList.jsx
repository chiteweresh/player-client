import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { baseBorder, baseMargin, colors, dimensions } from '../../style/theme';
import { playList } from '../../utils/playList';

const PlayList = ({ currentSource, onUpdateSource }) => {
  return (
    <Container>
      {playList.map((item) => (
        <PlayListItem
          type="button"
          key={item.id}
          active={item.id === currentSource}
          onClick={() => onUpdateSource(item.id)}
        >
          {item.name}
        </PlayListItem>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: ${dimensions.videoWidth}px;
  margin-left: ${baseMargin};
  margin-top: ${baseMargin};
  border: ${baseBorder};
  display: inline-flex;
  align-items: center;
`;

const PlayListItem = styled.button`
  font-size: 1rem;
  margin: 9px;
  border: ${baseBorder};
  height: ${dimensions.buttonHeight}px;
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
