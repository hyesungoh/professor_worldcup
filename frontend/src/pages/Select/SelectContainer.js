import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";

import SelectPresenter from "pages/Select/SelectPresenter";
import SelectDetail from "components/SelectDetail";

// 현재 교수 배열을 랜덤으로 섞어서 반환
const returnRandomProfArr = (profs, round) => {
    const randomProfs = profs
        .sort((a, b) => 0.5 - Math.random())
        .slice(0, round);
    return randomProfs;
};

function SelectContainer({ history, major, professors }) {
    const [round, setRound] = useState(2);
    const [nowRound, setNowRound] = useState(0);
    const [nextProfs, setNextProfs] = useState([]);
    const [nowProfs, setNowProfs] = useState(professors);

    useEffect(() => {
        if (major === undefined || major === "") {
            history.push("/");
        } else {
            // 처음 진입 시 교수를 랜덤으로 섞어서 저장
            setNowProfs(returnRandomProfArr(professors, round));
        }
    }, []);

    const pushWinnerData = async () => {
        const data = await axios({
            url: `http://localhost:8080/user/winner`,
            method: "post",
            data: {
                professor: {
                    professorName: "이승진",
                    departmentId: 1,
                },
            },
        });
        console.log(data);
        // const data = axios.post("https://localhost:8080/user/winner", {
        //     professorsName: nowProfs[0].professorsName,
        //     departmentId: 1,
        // });
        // console.log(data);
    };

    useEffect(() => {
        // 라운드가 전부 진행됐을 때
        if (nowRound === parseInt(round / 2)) {
            // 다음 라운드로
            setRound(parseInt(round / 2));
            // 현재 라운드를 0으로
            setNowRound(0);
            // 진출 교수들로 다시 랜덤으로 섞어서 저장
            setNowProfs(returnRandomProfArr(nextProfs));
            // 다음 진출 교수 배열을 다시 비어있도록
            setNextProfs([]);
        }

        if (round === 1) {
            pushWinnerData();
        }

        console.log(nowProfs, round);
    }, [nowRound]);

    if (nowProfs && round === nowProfs.length) {
        const halfNumber = parseInt(round / 2);
        return (
            <>
                {[...Array(halfNumber).keys()].map((index) => (
                    <SelectDetail
                        key={`${nowRound}-${index}`}
                        index={index}
                        round={round}
                        major={major}
                        leftProf={nowProfs[index]}
                        rightProf={nowProfs[index + halfNumber]}
                        isCurrentRound={index === nowRound}
                        setNowRound={setNowRound}
                        setNextProfs={setNextProfs}
                    />
                ))}
            </>
        );
    }
    return <div></div>;
}

function mapStateToProps(state) {
    const { major, professors } = state;
    return { major, professors };
}

export default connect(mapStateToProps)(SelectContainer);
