import React, {useEffect, useRef} from "react";
import "./VideoContainer.scss"

export const VideoContainer = (props) => {
    const videoRef = useRef(null);
    const {playing, muted} = props;

    useEffect(() => {
        !playing ? (videoRef.current.pause()) : (videoRef.current.play())
    }, [playing])
    useEffect(() => {
        videoRef.current.muted = muted
    }, [muted])

    const onTimeUpdate = () => {
        const video = videoRef.current;
        const time = video.currentTime;
        const duration = video.duration;
        props.onUpdateTime(time, duration)
    }

    return (
        <div className="video-container">
            <video
                onTimeUpdate={onTimeUpdate}
                ref={videoRef}
                className="video"
                controls src="/video/2.mp4"
            ></video>
        </div>
    )
}