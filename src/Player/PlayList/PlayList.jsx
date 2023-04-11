import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { baseBorder, baseMargin, colors, dimensions } from '../../style/theme';

const PlayList = ({ currentSource, onUpdateSource }) => {
  const list = [1, 2, 3];

  return (
    <div className="playlist">
      <Container>
        {list.map((item) => (
          <PlayListItem
            type="button"
            key={item}
            active={`/video/${item}.mp4` === currentSource}
            onClick={() => onUpdateSource(`/video/${item}.mp4`)}
          >
            video {item}
          </PlayListItem>
        ))}
      </Container>
    </div>
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
  currentSource: PropTypes.string,
  onUpdateSource: PropTypes.func.isRequired,
};
export default PlayList;
