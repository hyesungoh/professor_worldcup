import SelectDetail from "components/SelectDetail";
import React from "react";

function SelectPresenter({ history, major, professors, setNextProfs }) {
    return (
        <div>
            <SelectDetail major={major} />
        </div>
    );
}

export default SelectPresenter;
