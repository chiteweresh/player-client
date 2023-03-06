import React, {useRef} from "react";
import {getDisplayTime} from "../../../utils/progressUtils";
import './Progress.scss'

export const Progress = (props) => {
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