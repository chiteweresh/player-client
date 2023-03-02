import {useState} from "react";
import {ControlsPanel} from "./ControlsPanel/ControlsPanel";
import './Player.scss';
import {VideoContainer} from "./VideoContainer/VideoContainer";

export const Player = () => {
    const [videoState, setVideoState] = useState({
        playing: false,
    })
    const {playing} = videoState

    const playPauseHandler = () => {
        setVideoState({
            ...videoState,
            playing: !videoState.playing
        })
    }

    return (
        <div className="player">
            <VideoContainer playing={playing}/>
            <ControlsPanel playing={playing} onPlayPause={playPauseHandler}/>
        </div>
    );
}

