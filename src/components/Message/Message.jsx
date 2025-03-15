import React from "react";
import "./Message.css"

export function Message({ text, isFail, isWin }) {

    return (
        <div className={isFail ? "block block-error" : isWin ? "block block-success" : "block"} style={{ margin: "32px" }}>
            <p className="message__text">{text}</p>
        </div>
    )
}