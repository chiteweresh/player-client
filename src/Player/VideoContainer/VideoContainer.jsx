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

    return (
        <div className="video-container">
            <video ref={videoRef} className="video" controls src="/video/2.mp4" id="video2"></video>
        </div>
    )
}