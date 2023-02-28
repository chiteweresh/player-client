import {ControlsPanel} from "./ControlsPanel/ControlsPanel";
import './Player.scss';
import {VideoContainer} from "./VideoContainer/VideoContainer";

export const Player = () => {
    return (
        <div className="player">
            <VideoContainer/>
            <ControlsPanel/>
        </div>
    );
}

