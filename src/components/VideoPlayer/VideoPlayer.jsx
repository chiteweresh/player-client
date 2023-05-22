import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import dashjs from 'dashjs';
import { baseBorder, dimensions } from '../../style/theme';
import Bottom from './Bottom/Bottom';

const VideoPlayer = ({ videoData }) => {
  const videoRef = useRef();
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [clickFrames, setClickFrames] = useState(0);
  const [subtitle, setSubtitle] = useState(true);

  const { videoPoster, videoUrl, videoDuration } = videoData;
  const mediaPlayer = dashjs.MediaPlayer().create();

  useEffect(() => {
    mediaPlayer.initialize(videoRef.current, videoUrl, false);
    mediaPlayer.on(dashjs.MediaPlayer.events.BASE_URLS_UPDATED, () =>
      setPlaying(false)
    );
    return () => {
      mediaPlayer.isReady() ? mediaPlayer.destroy() : null;
    };
  }, [videoUrl]);

  useEffect(() => {
    const { current: videoElement } = videoRef;
    playing ? videoElement.play() : videoElement.pause();
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
    setCurrentTime(videoRef.current.currentTime);
  };
  const onUpdateProgress = (time) => {
    setClickFrames(time);
  };
  const onPlayPause = () => setPlaying(!playing);
  const onSwitchSubtitle = () => {
    setSubtitle(!subtitle);
  };
  const onUpdateVolume = (v) => {
    setVolume(v);
  };
  const onMute = () => {
    setMuted(!muted);
  };
  const onEnded = () => {
    setPlaying(false);
  };

  return (
    <>
      <VideoContainer>
        <video
          className="dash-video"
          ref={videoRef}
          onTimeUpdate={onTimeUpdate}
          onEnded={onEnded}
          muted={muted}
          poster={videoPoster}
          controls
        />
      </VideoContainer>
      <Bottom
        duration={videoDuration}
        playing={playing}
        onPlayPause={onPlayPause}
        volume={volume}
        onUpdateVolume={onUpdateVolume}
        muted={muted}
        onMute={onMute}
        currentTime={currentTime}
        onUpdateProgress={onUpdateProgress}
        subtitle={subtitle}
        onSwitchSubtitle={onSwitchSubtitle}
      />
    </>
  );
};

const VideoContainer = styled.div`
  position: relative;
  width: ${dimensions.videoWidth}px;
  height: ${dimensions.videoHeight}px;
  margin: 50px auto 0;
  border: ${baseBorder};
  background-color: white;

  .dash-video {
    position: relative;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    max-width: ${dimensions.videoWidth}px;
    height: ${dimensions.videoHeight}px;
  }
`;

VideoPlayer.propTypes = {
  videoData: PropTypes.shape({
    videoPoster: PropTypes.string,
    videoUrl: PropTypes.string,
    videoDuration: PropTypes.number,
  }),
};
export default VideoPlayer;
