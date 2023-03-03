import React from "react";
import './ControlsButton.scss';

export const ControlsButton = (props) => {
    const {onPlayPause, playing} = props;
    return (
        <div className="controls-button">
            <button className="play-button" onClick={onPlayPause}>
                {
                    !playing ? (
                        <svg viewBox="0 0 36 36" height="100%">
                            <path d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path>
                        </svg>
                    ) : (
                        <svg viewBox="0 0 36 36" height="100%">
                            <path d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path>
                        </svg>
                    )
                }

            </button>
        </div>
    )
}