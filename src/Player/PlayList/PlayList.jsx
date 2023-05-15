import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { baseMargin, colors, dimensions } from '../../style/theme';
import { PLAYLIST } from '../../utils/constants';

const PlayList = ({ currentSource, onUpdateSource }) => {
  return (
    <Container>
      {PLAYLIST.map((item) => (
        <PlayListItem
          key={item.id}
          active={item.id === currentSource}
          onClick={() => onUpdateSource(item.id)}
        >
          <VideoPoster src={item.poster} alt="poster" />
          <VideoDetail>
            <div className="video-title">{item.title}</div>
            <div className="video-description">{item.description}</div>
          </VideoDetail>
        </PlayListItem>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: ${dimensions.videoWidth}px;
  margin: ${baseMargin} auto ${baseMargin};
  display: grid;
`;

const PlayListItem = styled.div`
  width: ${dimensions.videoWidth}px;
  font-size: 1rem;
  margin-bottom: 5px;
  height: 120px;
  display: flex;
  align-items: center;
  text-align: left;
  border-radius: 4px;
  background-color: ${(props) =>
    props.active ? colors.activeItem : colors.regularItem};
  cursor: pointer;
`;

const VideoPoster = styled.img`
  width: ${dimensions.posterDimension}px;
  height: ${dimensions.posterDimension}px;
  margin: 0 ${baseMargin};
`;

const VideoDetail = styled.div`
  height: ${dimensions.posterDimension}px;
  margin: 0 ${baseMargin};
  .video-title {
    padding-top: 10px;
    font-family: monospace, monospace;
    font-size: 1.25rem;
  }
  .video-description {
    width: inherit;
    padding-top: 10px;
  }
`;

PlayList.propTypes = {
  currentSource: PropTypes.number,
  onUpdateSource: PropTypes.func.isRequired,
};
export default PlayList;
