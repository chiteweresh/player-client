import {useState} from "react";
import {ControlsPanel} from "./ControlsPanel/ControlsPanel";
import './Player.scss';
import {VideoContainer} from "./VideoContainer/VideoContainer";

export const Player = () => {
    const [videoState, setVideoState] = useState({
        playing: false,
        muted: false,
        duration: 0,
        currentTime: 0,
        currentVolume: 0.5
    })
    const {playing, muted, duration, currentTime, currentVolume} = videoState

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

    return (
        <div className="player">
            <VideoContainer
                playing={playing}
                muted={muted}
                onUpdateTime={updateTimeHandler}
                volume={currentVolume}
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
            />
        </div>
    );
}

