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
                <button className="pause-button" id="pause">
                    <svg viewBox="0 0 36 36" height="100%">
                        <path className="svg-fill"
                              d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"
                              id="pause" fill="#000000"></path>
                    </svg>
                </button>
                <div className="volume-panel">
                    <button className="volume-speaker" id="mute">
                        <svg viewBox="0 0 36 36" height="100%">
                            <path className="svg-fill" height="100%"
                                  d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z"
                                  id="volume" fill="#000000"></path>
                        </svg>
                    </button>
                    <div className="volume-bar">
                        <div className="volume" id="volume">
                            <div className="slider" id="slider"></div>
                            <div className="current-volume" id="current-volume"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="progress-bar-container">
                <div className="progress-background" id="progress-background">
                    <div className="progress" id="progress"></div>
                </div>
            </div>
        </div>
    )
}