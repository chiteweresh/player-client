import {ControlsPanel} from "./components/ControlsPanel";
import {VideoContainer} from "./components/VideoContainer";
import './Player.scss';

function Player() {
    return (
        <div className="player">
            <h1 className="highlight">This is a player</h1>
            <VideoContainer/>
            <ControlsPanel/>
        </div>
    );
}

export default Player;
