// import { db } from "../../services/firebase";

export const CHANGE_CURRENT_POINT = "CHANGE_CURRENT_POINT";

export const changeCurrentPoint = (currentPoint) => ({
    type: CHANGE_CURRENT_POINT,
    payload: currentPoint,
});





