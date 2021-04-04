import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import SelectPresenter from "pages/Select/SelectPresenter";

const returnRandomProfArr = (profs) => {
    return profs.sort((a, b) => 0.5 - Math.random());
};

function SelectContainer({ history, major, professors }) {
    const [round, setRound] = useState(16);
    const [nextProfs, setNextProfs] = useState([]);
    const [nowProfs, setNowProfs] = useState();

    useEffect(() => {
        if (major === undefined || major === "") {
            history.push("/");
        } else {
            setNowProfs(returnRandomProfArr(professors));
            
        }
    }, []);

    return (
        <SelectPresenter
            history={history}
            major={major}
            professors={professors}
            setNextProfs={setNextProfs}
        />
    );
}

function mapStateToProps(state) {
    const { major, professors } = state;
    return { major, professors };
}

export default connect(mapStateToProps)(SelectContainer);
