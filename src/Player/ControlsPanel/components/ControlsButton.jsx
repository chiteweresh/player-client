import React from "react";
import './ControlsButton.scss';

export const ControlsButton = () => {
    return (
        <div className="controls-button">
            <button className="play-button" id="play">
                <svg viewBox="0 0 36 36" height="100%">
                    <path d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path>
                </svg>
            </button>
        </div>
    )
}