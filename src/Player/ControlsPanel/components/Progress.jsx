import React, {useRef} from "react";
import {getDisplayTime} from "../../../utils/progressUtils";
import './Progress.scss'

export const Progress = (props) => {
    const progressRef = useRef(null);
    const {currentTime, duration, onUpdateProgress} = props;
    const currentProgress = currentTime / duration * 640;
    const onClickProgress = (e) => {
        const clickPosition = e.pageX;
        const panelPosition = Math.floor(progressRef.current.getBoundingClientRect().left)
        const framesTime = (clickPosition - panelPosition) / 640 * duration;
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