import React, {useEffect, useRef} from "react";
import "./VideoContainer.scss"

export const VideoContainer = (props) => {
    const videoRef = useRef(null);
    const {playing, muted, volume, onUpdateTime, clickFrames} = props;

    useEffect(() => {
        !playing ? (videoRef.current.pause()) : (videoRef.current.play())
    }, [playing])

    useEffect(() => {
        videoRef.current.volume = volume
    }, [volume])

    useEffect(() => {
        videoRef.current.currentTime = clickFrames
    }, [clickFrames])

    const onTimeUpdate = () => {
        const time = videoRef.current.currentTime;
        const duration = videoRef.current.duration;
        onUpdateTime(time, duration)
    }

    return (
        <div className="video-container">
            <video
                onTimeUpdate={onTimeUpdate}
                muted={muted}
                ref={videoRef}
                className="video"
                controls src="/video/2.mp4"
            ></video>
        </div>
    )
}