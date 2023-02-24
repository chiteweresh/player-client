import React from "react";
import "./VideoContainer.scss"

export const VideoContainer = () => {
    return (
        <div className="video-container">
            <video className="video" controls src="/video/2.mp4" id="video2"></video>
        </div>
    )
}