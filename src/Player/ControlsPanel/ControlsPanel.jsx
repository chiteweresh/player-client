import React from "react";
import {ControlsButton} from "./components/ControlsButton";
import {Progress} from "./components/Progress";
import {VolumePanel} from "./components/VolumePanel";
import './ControlsPanel.scss'

export const ControlsPanel = () => {
    return (
        <div className="controls-panel">
            <ControlsButton/>
            <VolumePanel/>
            <Progress/>
        </div>
    )
}