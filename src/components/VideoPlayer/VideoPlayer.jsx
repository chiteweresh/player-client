import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import dashjs from 'dashjs';
import { baseBorder, colors, dimensions } from '../../style/theme';
import Bottom from './Bottom/Bottom';
import useAd from '../../hooks/useAd';

const VideoPlayer = ({ videoData }) => {
  const videoRef = useRef();
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [seekFrame, setSeekFrame] = useState(0);
  const [subtitle, setSubtitle] = useState(true);

  const { videoPoster, videoUrl, videoDuration, adUrl } = videoData;
  const { adInfo, inAd, modifiedTime, seekTime } = useAd(
    adUrl,
    videoTime,
    seekFrame
  );
  const mediaPlayer = dashjs.MediaPlayer().create();

  useEffect(() => {
    mediaPlayer.initialize(videoRef.current, videoUrl, false);
    mediaPlayer.on(dashjs.MediaPlayer.events.BASE_URLS_UPDATED, () => {
      setPlaying(false);
      setCurrentTime(0);
    });
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
    videoRef.current.currentTime = seekTime;
  }, [seekFrame]);

  useEffect(() => {
    const textTrack = videoRef.current.textTracks[0];
    if (textTrack) {
      textTrack.mode = subtitle ? 'showing' : 'hidden';
    }
  }, [subtitle]);

  const onTimeUpdate = () => {
    setVideoTime(videoRef.current.currentTime);
    setCurrentTime(modifiedTime);
  };
  const onPlayPause = () => setPlaying(!playing);
  const onSwitchSubtitle = () => {
    setSubtitle(!subtitle);
  };
  const onSeek = (frameTime) => {
    setSeekFrame(frameTime);
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
        {inAd && <AdContainer>这是⚠️广告</AdContainer>}
      </VideoContainer>
      <Bottom
        duration={inAd ? adInfo.adDuration : videoDuration}
        playing={playing}
        onPlayPause={onPlayPause}
        volume={volume}
        onUpdateVolume={onUpdateVolume}
        muted={muted}
        onMute={onMute}
        currentTime={inAd ? adInfo.adProgress : currentTime}
        onSeek={onSeek}
        subtitle={subtitle}
        onSwitchSubtitle={onSwitchSubtitle}
        ad={inAd}
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

const AdContainer = styled.div`
  color: red;
  font-size: 4rem;
  background-color: ${colors.activeItem};
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;
`;

VideoPlayer.propTypes = {
  videoData: PropTypes.shape({
    videoPoster: PropTypes.string,
    videoUrl: PropTypes.string,
    videoDuration: PropTypes.number,
    adUrl: PropTypes.string,
  }),
};
export default VideoPlayer;
