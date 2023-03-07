import React from "react";
import "./PlayList.scss"

export const PlayList = (props) => {
    const {source, onUpdateSource} = props;
    const list = ["1", "2"];
    return (
        <div className="playlist">
            {
                list.map((item) =>
                    <button
                        key={item}
                        className={item === source ? "active" : "list-item"}
                        onClick={() => onUpdateSource(item.toString())}
                    >video{item}</button>
                )
            }
        </div>
    )
}