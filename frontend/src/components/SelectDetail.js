import React, { useEffect, useRef } from "react";

const SelectDetail = ({
    index,
    round,
    major,
    nowRound,
    setNowRound,
    setNextProfs,
}) => {
    const leftItem = useRef(null);
    const rightItem = useRef(null);

    useEffect(() => {
        leftItem.classList = "select__item";
        rightItem.classList = "select__item";
    }, []);

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
            setNowRound((current) => current + 1);
            setNextProfs((current) => [...current, e.target.id]);
        }, 1500);
    };

    const isCurrentRound = () => {
        const className = nowRound === index ? "show" : "";
        return className;
    };

    return (
        <main className={`select ${isCurrentRound()}`}>
            <div className="select__info">
                <h1 className="select__info__title">{round}강</h1>
                <p className="select__info__major">{major}</p>
            </div>

            <div className="left">
                <div
                    id="test1"
                    ref={leftItem}
                    onClick={onSelect}
                    className="select__item"
                ></div>
            </div>
            <div className="right">
                <div
                    id="test2"
                    ref={rightItem}
                    onClick={onSelect}
                    className="select__item"
                ></div>
            </div>
        </main>
    );
};

export default SelectDetail;
