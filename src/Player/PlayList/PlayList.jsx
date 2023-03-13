import React from "react";
import "./PlayList.scss"

export const PlayList = (props) => {
    const {currentSource, onUpdateSource} = props;
    const list = ["1", "2"];

    return (
        <div className="playlist">
            {
                list.map((item) =>
                    <button
                        key={item}
                        className={(`/video/${item}.mp4`) === currentSource ? "active" : "list-item"}
                        onClick={() => onUpdateSource(`/video/${item}.mp4`)}
                    >video{item}</button>
                )
            }
        </div>
    )
}