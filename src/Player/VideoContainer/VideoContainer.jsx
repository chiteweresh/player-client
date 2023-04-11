import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { baseBorder, baseMargin, dimensions } from '../../style/theme';

const VideoContainer = ({
  playing,
  onPlayPause,
  muted,
  volume,
  onUpdateTime,
  onLoadedDuration,
  clickFrames,
  currentSource,
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    playing ? videoRef.current.play() : videoRef.current.pause();
  }, [playing]);

  useEffect(() => {
    videoRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    videoRef.current.currentTime = clickFrames;
  }, [clickFrames]);

  const onTimeUpdate = () => {
    const time = videoRef.current.currentTime;
    onUpdateTime(time);
  };

  const onDurationLoaded = () => {
    const { duration } = videoRef.current;
    onLoadedDuration(duration);
  };

  return (
    <Container>
      <video
        onLoadedMetadata={onDurationLoaded}
        onTimeUpdate={onTimeUpdate}
        onEnded={onPlayPause}
        muted={muted}
        ref={videoRef}
        className="video"
        src={currentSource}
      />
    </Container>
  );
};

const Container = styled.div`
  width: ${dimensions.videoWidth};
  height: ${dimensions.videoHeight};
  margin-left: ${baseMargin};
  margin-top: 50px;
  border: ${baseBorder};
  .video {
    position: relative;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    max-width: ${dimensions.videoWidth};
    max-height: ${dimensions.videoHeight};
  }
`;

VideoContainer.propTypes = {
  playing: PropTypes.bool,
  onPlayPause: PropTypes.func.isRequired,
  muted: PropTypes.bool,
  volume: PropTypes.number,
  onUpdateTime: PropTypes.func.isRequired,
  onLoadedDuration: PropTypes.func.isRequired,
  clickFrames: PropTypes.number,
  currentSource: PropTypes.string,
};
export default VideoContainer;
