// import { db } from "../../services/firebase";

export const CHANGE_TIME = "CHANGE_TIME";
export const RESET_TIME = "RESET_TIME";
export const SET_TIME_OVER = "SET_TIME_OVER";

export const changeTime = (number) => ({
    type: CHANGE_TIME,
    payload: number,
});

export const resetTime = () => ({
    type: RESET_TIME,
});

export const setTimeOver = (boolean) => ({
    type: SET_TIME_OVER,
    payload: boolean,
});







