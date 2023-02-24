import React from "react";
import './ControlsPanel.scss'

export const ControlsPanel = () => {
    return (
        <div className="controls-panel">
            <div className="controls">
                <button className="play-button" id="play">
                    <svg viewBox="0 0 36 36" height="100%">
                        <path className="svg-fill"
                              d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"
                              id="play" fill="#000000"></path>
                    </svg>
                </button>
            </div>
            <div className="progress-bar-container">
                <div className="progress-background" id="progress-background">
                    <div className="progress" id="progress"></div>
                </div>
            </div>
        </div>
    )
}