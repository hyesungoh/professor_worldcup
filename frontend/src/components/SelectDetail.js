import React, { useState, useEffect, useRef } from "react";

const SelectDetail = ({
    index,
    round,
    major,
    leftProf,
    rightProf,
    isCurrentRound,
    setNowRound,
    setNextProfs,
}) => {
    const leftItem = useRef(null);
    const rightItem = useRef(null);

    const onSelect = (e) => {
        let targetProf;
        if (e.target.id === leftItem.current.id) {
            leftItem.current.classList.add("select--leftSelected");
            rightItem.current.classList.add("select--rightNotSelected");
            targetProf = leftProf;
        } else {
            leftItem.current.classList.add("select--leftNotSelected");
            rightItem.current.classList.add("select--rightSelected");
            targetProf = rightProf;
        }

        setTimeout(() => {
            e.target.classList.add("select--nextStage");
        }, 1000);

        setTimeout(() => {
            setNextProfs((current) => [...current, targetProf]);
            setNowRound((current) => current + 1);
        }, 1500);
    };

    // 현재 라운드인 것만 보여줄 수 있도록
    const getCurrentRoundCN = () => {
        return isCurrentRound ? "show" : "";
    };

    return (
        <main className={`select ${getCurrentRoundCN()}`}>
            <div className="select__info">
                <h1 className="select__info__title">{round}강</h1>
                <p className="select__info__major">{major}</p>
            </div>

            <div className="left">
                <div
                    id={leftProf.professorName}
                    ref={leftItem}
                    onClick={onSelect}
                    className="select__item"
                >
                    <div className="select__item__name">
                        <span>{leftProf.professorName}</span> 교수님
                    </div>
                    <div className="select__item__major">
                        <span>{leftProf.major}</span>
                    </div>
                </div>
            </div>
            <div className="right">
                <div
                    id={rightProf.professorName}
                    ref={rightItem}
                    onClick={onSelect}
                    className="select__item"
                >
                    <div className="select__item__name">
                        <span>{rightProf.professorName}</span> 교수님
                    </div>
                    <div className="select__item__major">
                        <span>{rightProf.major}</span>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default React.memo(SelectDetail);
