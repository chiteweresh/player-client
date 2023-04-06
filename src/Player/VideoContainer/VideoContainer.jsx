import React, { useEffect, useRef } from 'react';
import './VideoContainer.scss';
import PropTypes from 'prop-types';

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
    playing ? (videoRef.current.play()) : (videoRef.current.pause());
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
    <div className="video-container">
      <video
        onLoadedMetadata={onDurationLoaded}
        onTimeUpdate={onTimeUpdate}
        onEnded={onPlayPause}
        muted={muted}
        ref={videoRef}
        className="video"
        src={currentSource}
      />
    </div>
  );
};

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
