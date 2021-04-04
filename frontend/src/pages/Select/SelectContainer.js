import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import SelectPresenter from "pages/Select/SelectPresenter";
import SelectDetail from "components/SelectDetail";

const returnRandomProfArr = (profs) => {
    return profs.sort((a, b) => 0.5 - Math.random());
};

function SelectContainer({ history, major, professors }) {
    const [round, setRound] = useState(16);
    const [nowRound, setNowRound] = useState(0);
    const [nextProfs, setNextProfs] = useState([]);
    const [nowProfs, setNowProfs] = useState(professors);

    useEffect(() => {
        if (major === undefined || major === "") {
            history.push("/");
        } else {
            setNowProfs(returnRandomProfArr(professors));
        }
    }, []);

    // 라운드가 전부 진행됐을 때
    useEffect(() => {
        if (nowRound === parseInt(round / 2)) {
            setRound(parseInt(round / 2));
            setNowRound(0);
            setNextProfs([]);
            setNowProfs(returnRandomProfArr(nextProfs));
        }
    }, [nowRound]);

    useEffect(() => {
        console.log(nowProfs);
        console.log(nextProfs);
    }, [nextProfs]);
    return (
        <>
            {[...Array(parseInt(round / 2)).keys()].map((index) => (
                <SelectDetail
                    key={index}
                    index={index}
                    round={round}
                    major={major}
                    nowRound={nowRound}
                    setNowRound={setNowRound}
                    setNextProfs={setNextProfs}
                />
            ))}
        </>
    );
}

function mapStateToProps(state) {
    const { major, professors } = state;
    return { major, professors };
}

export default connect(mapStateToProps)(SelectContainer);
