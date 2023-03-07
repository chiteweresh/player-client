import {useState} from "react";
import {ControlsPanel} from "./ControlsPanel/ControlsPanel";
import './Player.scss';
import {PlayList} from "./PlayList/PlayList";
import {VideoContainer} from "./VideoContainer/VideoContainer";

export const Player = () => {
    const [videoState, setVideoState] = useState({
        source: "2",
        playing: false,
        muted: false,
        duration: 0,
        currentTime: 0,
        currentVolume: 0.5,
        clickFrames: null
    })
    const {playing, muted, duration, currentTime, currentVolume, clickFrames, source} = videoState

    const sourceHandler = (item) => {
        setVideoState({
            ...videoState,
            source: item
        })
    }

    const playPauseHandler = () => {
        setVideoState({
            ...videoState,
            playing: !videoState.playing
        })
    }
    const muteHandler = () => {
        setVideoState({
            ...videoState,
            muted: !videoState.muted
        })
    }
    const updateTimeHandler = (current, duration) => {
        setVideoState({
            ...videoState,
            currentTime: current,
            duration: duration
        })
    }

    const volumeHandler = (volume) => {
        setVideoState({
            ...videoState,
            currentVolume: volume
        })
    }

    const progressHandler = (time) => {
        setVideoState({
            ...videoState,
            clickFrames: time
        })
    }

    return (
        <div className="player">
            <VideoContainer
                playing={playing}
                muted={muted}
                onUpdateTime={updateTimeHandler}
                volume={currentVolume}
                clickFrames={clickFrames}
                source={source}
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
                clickFrames={clickFrames}
                onUpdateProgress={progressHandler}
            />
            <PlayList
                source={source}
                onUpdateSource={sourceHandler}
            />
        </div>
    );
}

