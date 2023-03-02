import React from "react";
import {ControlsButton} from "./components/ControlsButton";
import {Progress} from "./components/Progress";
import {VolumePanel} from "./components/VolumePanel";
import './ControlsPanel.scss';

export const ControlsPanel = (props) => {
    return (
        <div className="controls-panel">
            <ControlsButton onPlayPause={props.onPlayPause} playing={props.playing}/>
            <VolumePanel/>
            <Progress/>
        </div>
    )
}