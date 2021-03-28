import { createStore } from "redux";

const OPERATION = {
    SELECT: "SELECT",
};

const selectMajor = (major) => {
    return { type: OPERATION.SELECT, major };
};

const reducer = (state = "", action) => {
    switch (action.type) {
        case OPERATION.SELECT:
            return action.major;
        default:
            return state;
    }
};

const store = createStore(reducer);

export const actionCreators = {
    selectMajor,
};

export default store;
