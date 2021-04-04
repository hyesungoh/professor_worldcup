import { createStore } from "redux";

const OPERATION = {
    SELECT: "SELECT",
};

const selectMajor = (major, professors) => {
    return { type: OPERATION.SELECT, major, professors };
};

const reducer = (state = "", action) => {
    switch (action.type) {
        case OPERATION.SELECT:
            // return [action.major, action.professors];
            return { major: action.major, professors: action.professors };
        default:
            return state;
    }
};

const store = createStore(reducer);

export const actionCreators = {
    selectMajor,
};

export default store;
