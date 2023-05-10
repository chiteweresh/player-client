import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import dashjs from 'dashjs';
import { baseBorder, baseMargin, dimensions } from '../../style/theme';
import { playList } from '../../utils/playList';

const VideoContainer = ({
  playing,
  onPlayPause,
  muted,
  volume,
  onUpdateTime,
  onLoadedDuration,
  clickFrames,
  currentSource,
  subtitle,
}) => {
  const videoRef = useRef(null);
  const mediaPlayer = dashjs.MediaPlayer().create();
  const index = currentSource - 1;

  useEffect(() => {
    mediaPlayer.initialize(videoRef.current, playList[index].url, false);
    return () => {
      mediaPlayer.reset();
    };
  }, [currentSource]);

  useEffect(() => {
    playing ? videoRef.current.play() : videoRef.current.pause();
  }, [playing]);

  useEffect(() => {
    videoRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    videoRef.current.currentTime = clickFrames;
  }, [clickFrames]);

  useEffect(() => {
    const textTrack = videoRef.current.textTracks[0];
    if (textTrack) {
      textTrack.mode = subtitle ? 'showing' : 'hidden';
    }
  }, [subtitle]);

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
        className="dashVideo"
        poster={playList[index].poster}
        controls
      />
    </Container>
  );
};

const Container = styled.div`
  width: ${dimensions.videoWidth}px;
  height: ${dimensions.videoHeight}px;
  margin-left: ${baseMargin};
  margin-top: 50px;
  border: ${baseBorder};
  .dashVideo {
    position: relative;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    max-width: ${dimensions.videoWidth}px;
    max-height: ${dimensions.videoHeight}px;
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
  currentSource: PropTypes.number,
  subtitle: PropTypes.bool,
};
export default VideoContainer;
