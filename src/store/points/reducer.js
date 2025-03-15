import { CHANGE_CURRENT_POINT } from "./actions";

const initialState = {
    currentPoint: 0
};

export const pointsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CURRENT_POINT:
            return {
                currentPoint: action.payload
            };

        default: {
            return state;
        }
    }
};

