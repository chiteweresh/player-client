import React from "react";
import './ControlsPanel.scss'

export const ControlsPanel = () => {
    return (
        <div className="controls-panel">
            <div className="controls">
                controls
            </div>
            <div className="progress-bar-container">
                <div className="progress-background" id="progress-background">
                    <div className="progress" id="progress"></div>
                </div>
            </div>
        </div>
    )
}