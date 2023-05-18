import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { baseMargin, colors, dimensions } from '../../style/theme';
import { getDisplayTime } from '../../utils/utils';

const PlayList = ({ currentSource, onUpdateSource }) => {
  const [playlist, setPlaylist] = useState(null);
  useEffect(() => {
    fetch('/api/playlist.json')
      .then((res) => res.json())
      .then((data) => {
        setPlaylist(data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error :', error);
      });
  }, []);

  if (!playlist) {
    return <div />;
  }

  return (
    <Container>
      {playlist.map((item) => (
        <PlayListItem
          key={item.id}
          active={item.id === currentSource}
          onClick={() => onUpdateSource(item.id)}
          // TODO: change id into asset ID when video source can be get from request
        >
          <VideoPoster src={item.poster} alt="poster" />
          <VideoDetail>
            <div className="video-title">{item.title}</div>
            <div className="video-description">{item.synopsis}</div>
            <div className="video-description">
              duration: {getDisplayTime(item.duration)}
            </div>
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
