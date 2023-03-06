import React, {useEffect, useRef} from "react";
import "./VideoContainer.scss"

export const VideoContainer = (props) => {
    const videoRef = useRef(null);
    const {playing, muted, volume, onUpdateTime} = props;

    useEffect(() => {
        !playing ? (videoRef.current.pause()) : (videoRef.current.play())
    }, [playing])

    useEffect(() => {
        videoRef.current.volume = volume
    }, [volume])

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
                muted={muted}
                ref={videoRef}
                className="video"
                controls src="/video/2.mp4"
            ></video>
        </div>
    )
}