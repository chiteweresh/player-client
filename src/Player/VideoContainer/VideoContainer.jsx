import React, {useEffect, useRef} from "react";
import "./VideoContainer.scss"

export const VideoContainer = (props) => {
    const videoRef = useRef(null);
    const {playing, onPlayPause, muted, volume, onUpdateTime, onLoadedDuration, clickFrames, currentSource} = props;

    useEffect(() => {
        !playing ? (videoRef.current.pause()) : (videoRef.current.play());
    }, [playing])

    useEffect(() => {
        videoRef.current.volume = volume;
    }, [volume])

    useEffect(() => {
        videoRef.current.currentTime = clickFrames;
    }, [clickFrames])

    const onTimeUpdate = () => {
        const time = videoRef.current.currentTime;
        onUpdateTime(time);
    }

    const onDurationLoaded = () => {
        const duration = videoRef.current.duration;
        onLoadedDuration(duration);
        if (playing === videoRef.current.paused) {
            onPlayPause();
        }
    }

    return (
        <div className="video-container">
            <video
                onLoadedMetadata={onDurationLoaded}
                onTimeUpdate={onTimeUpdate}
                onEnded={onPlayPause}
                muted={muted}
                ref={videoRef}
                className="video"
                src={currentSource}
            ></video>
        </div>
    )
}