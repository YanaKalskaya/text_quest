import { CHANGE_TIME, RESET_TIME, SET_TIME_OVER } from "./actions";

const initialState = {
    timeCount: 0,
    timeOver: false
};

export const timeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TIME:
            return {
                ...state,
                timeCount: state.timeCount + action.payload
            };
        case RESET_TIME:
            return {
                ...state,
                timeCount: 0
            };
        case SET_TIME_OVER:
            return {
                ...state,
                timeOver: action.payload
            };
        default: {
            return state;
        }
    }
};

