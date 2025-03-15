import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataByNumber } from "../helpers/getDataByNumber";
import { changeCurrentPoint } from "../store/points";
import { getCurrentPoint } from "../store/points/selectors";
import { resetTime, setTimeOver } from "../store/time/actions";
import { getTimeOver } from "../store/time/selectors";
import { Message } from "./Message/Message";
import { Options } from "./Options/Options";

export function Messages() {

    const dispatch = useDispatch();
    const currentPoint = useSelector(getCurrentPoint);
    const isTimeOver = useSelector(getTimeOver);
    const data = getDataByNumber(currentPoint);

    return (
        <div>
            <Message text={data.text} isFail={data.isFail} isWin={data.isWin}></Message>
            <Options options={data.options}></Options>
            {
                isTimeOver ? <p className="block block-error" style={{ margin: "32px" }}>К сожалению твое время истекло! Ты слышишь шум приближающейся машины. Хозяин особняка вернулся и вызвал полицию. Миссия провалена!</p> : <></>
            }
            {
                data.isFail || isTimeOver ? <button className="block btn" style={{ margin: "0 32px" }} onClick={() => {
                    dispatch(changeCurrentPoint(0));
                    dispatch(resetTime());
                    dispatch(setTimeOver(false));
                }} >Начать заново</button> : <></>
            }
            {
                data.isWin ? <button className="block btn" style={{ margin: "0 32px" }} onClick={() => {
                    dispatch(changeCurrentPoint(0));
                    dispatch(resetTime());
                    dispatch(setTimeOver(false));
                }} >Сыграть еще раз</button> : <></>
            }
        </div>
    )
}
