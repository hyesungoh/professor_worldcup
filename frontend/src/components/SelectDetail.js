import React, { useState, useEffect, useRef } from "react";

const SelectDetail = ({
    index,
    round,
    major,
    nowProfs,
    nowRound,
    setNowRound,
    setNextProfs,
}) => {
    const leftItem = useRef(null);
    const rightItem = useRef(null);

    useEffect(() => {
        // 16 > 8강이 됐을 때 선택된 것에 부여될 클래스 리스트가 부여돼 있음
        // ref를 이용해여 classList를 초기화 할려했으나 property 에러
        console.log(leftItem);

        leftItem.current.classList = ["select__item"];
        rightItem.current.classList = ["select__item"];
    }, [leftItem]);

    // if (leftItem.current) {
    //     leftItem.current.classList = ["select__item"];
    // }

    // if (rightItem.current) {
    //     rightItem.current.classList = ["select__item"];
    // }

    const onSelect = (e) => {
        if (e.target === leftItem.current) {
            leftItem.current.classList.add("select--leftSelected");
            rightItem.current.classList.add("select--rightNotSelected");
        } else {
            leftItem.current.classList.add("select--leftNotSelected");
            rightItem.current.classList.add("select--rightSelected");
        }

        setTimeout(() => {
            e.target.classList.add("select--nextStage");
        }, 1000);

        setTimeout(() => {
            setNextProfs((current) => [...current, e.target.id]);
            setNowRound((current) => current + 1);
        }, 1500);
    };

    // 현재 라운드인 것만 보여줄 수 있도록
    const isCurrentRound = () => {
        const className = nowRound === index ? "show" : "";
        return className;
    };

    return (
        <main id={index + round} className={`select ${isCurrentRound()}`}>
            <div className="select__info">
                <h1 className="select__info__title">{round}강</h1>
                <p className="select__info__major">{major}</p>
            </div>

            <div className="left">
                <div
                    id={nowProfs[index].professorName}
                    ref={leftItem}
                    onClick={onSelect}
                    className="select__item"
                >
                    {nowProfs[index].professorName}
                </div>
            </div>
            <div className="right">
                <div
                    id={nowProfs[index].professorName}
                    ref={rightItem}
                    onClick={onSelect}
                    className="select__item"
                ></div>
            </div>
        </main>
    );
};

export default SelectDetail;
