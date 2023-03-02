import {useState} from "react";
import {ControlsPanel} from "./ControlsPanel/ControlsPanel";
import './Player.scss';
import {VideoContainer} from "./VideoContainer/VideoContainer";

export const Player = () => {
    const [videoState, setVideoState] = useState({
        playing: false,
        muted: false,
    })
    const {playing, muted} = videoState

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

    return (
        <div className="player">
            <VideoContainer playing={playing} muted={muted}/>
            <ControlsPanel playing={playing} onPlayPause={playPauseHandler} muted={muted} onMute={muteHandler}/>
        </div>
    );
}

