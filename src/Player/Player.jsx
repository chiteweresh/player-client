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
    })
    const {playing, muted, duration, currentTime} = videoState

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

    return (
        <div className="player">
            <VideoContainer playing={playing} muted={muted} onUpdateTime={updateTimeHandler}
            />
            <ControlsPanel
                playing={playing}
                onPlayPause={playPauseHandler}
                muted={muted}
                onMute={muteHandler}
                currentTime={currentTime}
                duration={duration}
            />
        </div>
    );
}

