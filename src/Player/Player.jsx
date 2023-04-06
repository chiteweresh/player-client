import React, { useState } from 'react';
import ControlsPanel from './ControlsPanel/ControlsPanel';
import PlayList from './PlayList/PlayList';
import VideoContainer from './VideoContainer/VideoContainer';

const Player = () => {
  const [videoState, setVideoState] = useState({
    currentSource: '/video/2.mp4',
    playing: false,
    muted: false,
    duration: 0,
    currentTime: 0,
    currentVolume: 0.5,
    clickFrames: null,
  });
  const {
    playing, muted, duration, currentTime, currentVolume, clickFrames, currentSource,
  } = videoState;

  const sourceHandler = (item) => {
    setVideoState({
      ...videoState,
      playing: playing ? false : (playing),
      currentSource: item,
    });
  };

  const playPauseHandler = () => {
    setVideoState({
      ...videoState,
      playing: !videoState.playing,
    });
  };
  const muteHandler = () => {
    setVideoState({
      ...videoState,
      muted: !videoState.muted,
    });
  };
  const updateTimeHandler = (current) => {
    setVideoState({
      ...videoState,
      currentTime: current,
    });
  };
  const getDurationHandler = (value) => {
    setVideoState({
      ...videoState,
      duration: value,
    });
  };

  const volumeHandler = (volume) => {
    setVideoState({
      ...videoState,
      currentVolume: volume,
    });
  };

  const progressHandler = (time) => {
    setVideoState({
      ...videoState,
      clickFrames: time,
    });
  };

  return (
    <div className="player">
      <VideoContainer
        playing={playing}
        onPlayPause={playPauseHandler}
        muted={muted}
        onUpdateTime={updateTimeHandler}
        onLoadedDuration={getDurationHandler}
        volume={currentVolume}
        clickFrames={clickFrames}
        currentSource={currentSource}
      />
      <ControlsPanel
        playing={playing}
        onPlayPause={playPauseHandler}
        muted={muted}
        onMute={muteHandler}
        currentTime={currentTime}
        duration={duration}
        volume={currentVolume}
        onUpdateVolume={volumeHandler}
        onUpdateProgress={progressHandler}
      />
      <PlayList
        currentSource={currentSource}
        onUpdateSource={sourceHandler}
      />
    </div>
  );
};

export default Player;
