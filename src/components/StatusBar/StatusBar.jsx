import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTimeOver } from "../../store/time/actions";
import { getTime } from "../../store/time/selectors";
import "./StatusBar.css"

export function StatusBar() {

    const dispatch = useDispatch();
    const time = useSelector(getTime);
    const remainingTime = 5 - time;

    useEffect(() => {
        if (remainingTime <= 0) {
            dispatch(setTimeOver(true));
        }
    }, [remainingTime])

    return (
        <div className="status-bar">
            <p className="block" style={{ textAlign: "center" }}>Осталось времени: </p>
            <p className="block" style={{ width: "50px", marginLeft: "16px" }}>{remainingTime}</p>
        </div>
    )
}