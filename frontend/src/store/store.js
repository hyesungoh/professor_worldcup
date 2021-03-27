import { createStore } from "redux";

const OPERATION = {
    ADD: "ADD",
};

const reducer = (state = [], action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
