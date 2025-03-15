import React from "react";
import { useDispatch } from "react-redux";
import { changeCurrentPoint } from "../../store/points";
import { resetTime, setTimeOver } from "../../store/time";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "./Header.css"

export function Header() {
    const dispatch = useDispatch();

    return (
        <>
            <div className="block header">
                <h1 className="heading">
                    Квест "Первая миссия"
                </h1>
                <div onClick={() => {
                    dispatch(changeCurrentPoint(0));
                    dispatch(resetTime());
                    dispatch(setTimeOver(false));
                }} className="icon-arrow" data-tooltip-id="tooltip-arrow"></div>
            </div>
            <ReactTooltip
                id="tooltip-arrow"
                place="bottom"
                content="Начать сначала"
            />
        </>
    )
}