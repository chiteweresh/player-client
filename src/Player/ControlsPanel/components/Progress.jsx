import React from "react";
import './Progress.scss'

export const Progress = (props) => {
    const {currentTime, duration} = props;
    const getDisplayTime = (time) => {
        const minute = ('0' + Math.floor(time % 3600 / 60)).slice(-2)
        const second = ('0' + Math.floor(time % 60)).slice(-2)
        return minute + ":" + second
    }

    return (
        <div className="progress">
            <div className="time-display">
                <span id="currentTime">{getDisplayTime(currentTime)}</span> &nbsp;/&nbsp; <span
                id="duration">{getDisplayTime(duration)}</span>
            </div>
            <div className="progress-bar">
                <div className="current-progress"></div>
            </div>
        </div>
    )
}