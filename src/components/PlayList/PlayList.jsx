import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS, PLAYLIST_DIMENSIONS } from '../../style/theme';
import { getDisplayTime } from '../../utils/utils';

const PlayList = ({ currentAsset, onUpdateAsset, playlist }) => {
  return (
    <PlayListContainer>
      {playlist &&
        playlist.map((item) => (
          <PlayListItem
            key={item.assetId}
            active={item.assetId === currentAsset}
            onClick={() => onUpdateAsset(item.assetId)}
          >
            <VideoPoster>
              <img className="poster" src={item.poster} alt="poster" />
              <VideoThumbnail>{getDisplayTime(item.duration)}</VideoThumbnail>
            </VideoPoster>
            <VideoDetail>
              <div className="video-title">{item.title}</div>
              <div className="video-description">{item.author}</div>
            </VideoDetail>
          </PlayListItem>
        ))}
    </PlayListContainer>
  );
};

const PlayListContainer = styled.div`
  width: ${PLAYLIST_DIMENSIONS.playlistWidth}px;
`;

const PlayListItem = styled.div`
  margin-bottom: 5px;
  height: ${PLAYLIST_DIMENSIONS.itemHeight}px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-color: ${(props) =>
    props.active ? COLORS.activeItem : COLORS.regularItem};
  cursor: pointer;
`;

const VideoPoster = styled.div`
  width: ${PLAYLIST_DIMENSIONS.posterWidth}px;
  height: ${0.55 * PLAYLIST_DIMENSIONS.posterWidth}px;
  position: relative;

  .poster {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`;

const VideoThumbnail = styled.div`
  width: ${PLAYLIST_DIMENSIONS.thumbnailWidth}px;
  background-color: ${COLORS.black};
  color: ${COLORS.white};
  border-radius: 3px;
  font-size: x-small;
  text-align: center;
  margin-left: auto;
  transform: translateY(-150%) translateX(-10%);
`;

const VideoDetail = styled.div`
  height: ${PLAYLIST_DIMENSIONS.itemHeight}px;
  width: 230px;
  margin-left: 10px;
  .video-title {
    padding-bottom: 8px;
    font-size: smaller;
  }
  .video-description {
    color: ${COLORS.descriptionText};
    font-size: small;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

PlayList.propTypes = {
  currentAsset: PropTypes.number,
  onUpdateAsset: PropTypes.func.isRequired,
  playlist: PropTypes.arrayOf(
    PropTypes.shape({
      assetId: PropTypes.number,
      title: PropTypes.string,
      synopsis: PropTypes.string,
    })
  ),
};
export default PlayList;
