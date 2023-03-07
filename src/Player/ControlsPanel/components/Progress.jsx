import React, {useRef} from "react";
import {getDisplayTime, getShift} from "../../../utils/utils";
import './Progress.scss'

export const Progress = (props) => {
    const progressRef = useRef(null);
    const {currentTime, duration, onUpdateProgress} = props;
    const currentProgress = currentTime / duration * 640;
    const onClickProgress = (e) => {
        const shift = getShift(e, progressRef)
        const framesTime = shift / 640 * duration;
        onUpdateProgress(framesTime);
    }

    return (
        <div className="progress">
            <div className="time-display">
                <span>{getDisplayTime(currentTime)}</span>
                &nbsp;/&nbsp;
                <span>{getDisplayTime(duration)}</span>
            </div>
            <div className="progress-bar" ref={progressRef} onClick={onClickProgress}>
                <div className="current-progress" style={{width: currentProgress}}></div>
            </div>
        </div>
    )
}