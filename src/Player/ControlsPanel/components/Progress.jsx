import React from "react";
import './Progress.scss'

export const Progress = (props) => {
    const {currentTime, duration} = props;
    const getDisplayTime = (time) => {
        const minute = ('0' + Math.floor(time % 3600 / 60)).slice(-2)
        const second = ('0' + Math.floor(time % 60)).slice(-2)
        return minute + ":" + second
    }
    const currentProgress = currentTime / duration * 640;

    return (
        <div className="progress">
            <div className="time-display">
                <span>{getDisplayTime(currentTime)}</span>
                &nbsp;/&nbsp;
                <span>{getDisplayTime(duration)}</span>
            </div>
            <div className="progress-bar">
                <div className="current-progress" style={{width: currentProgress}}></div>
            </div>
        </div>
    )
}