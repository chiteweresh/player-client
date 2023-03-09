import React, {useRef} from "react";
import {getDisplayTime, getShift} from "../../../utils/utils";
import './Progress.scss'

export const Progress = (props) => {
    const progressRef = useRef(null);
    const {currentTime, duration, onUpdateProgress} = props;

    const setCurrentProgressLength = () => {
        if (currentTime) {
            return currentTime / duration * progressRef.current.offsetWidth;
        } else return 0;

    }

    const onClickProgress = (e) => {
        const progressLength = progressRef.current.offsetWidth;
        const framesTime = getShift(e, progressRef) / progressLength * duration;
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
                <div className="current-progress" style={{width: setCurrentProgressLength()}}></div>
            </div>
        </div>
    )
}