import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataByNumber } from "../../helpers/getDataByNumber";
import { changeCurrentPoint } from "../../store/points";
import { changeTime } from "../../store/time";
import { getTimeOver } from "../../store/time/selectors";
import "./Options.css"

export function Options({ options }) {
    const dispatch = useDispatch();
    const isTimeOver = useSelector(getTimeOver);
    return (
        <div className="options__block">
            {
                options.map((option) => {
                    return <div key={option.number}>
                        <button className="block btn" disabled={isTimeOver} onClick={() => {
                            dispatch(changeCurrentPoint(option.number));
                            const lostTime = getDataByNumber(option.number).lostTime
                            if (lostTime) {
                                dispatch(changeTime(lostTime));
                            }
                        }}>{option.text}</button>
                    </div>
                })
            }
        </div>
    )
}