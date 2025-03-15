import { createStore, combineReducers, compose } from "redux";
import { pointsReducer } from "./points";
import { timeReducer } from "./time";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// комбинируем редьюсеры
const rootReducer = combineReducers({
    points: pointsReducer,
    time: timeReducer
});

const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState'))
    : {}

// создаем store с использованием persistedReducer
export const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers()
);

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})




