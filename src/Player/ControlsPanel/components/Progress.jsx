import React from "react";
import './Progress.scss'

export const Progress = () => {
    return (
        <div className="progress">
            <div className="time-display">
                <span id="currentTime">00:00</span> &nbsp;/&nbsp; <span id="duration">09:40</span>
            </div>
            <div className="progress-bar">
                <div className="current-progress"></div>
            </div>
        </div>
    )
}