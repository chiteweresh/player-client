import {ControlsPanel} from "./ControlsPanel/ControlsPanel";
import './Player.scss';
import {VideoContainer} from "./VideoContainer/VideoContainer";

function Player() {
    return (
        <div className="player">
            <VideoContainer/>
            <ControlsPanel/>
        </div>
    );
}

export default Player;
