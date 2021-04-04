import React, { useEffect, useRef } from "react";

const SelectDetail = ({ major }) => {
    const leftItem = useRef(null);
    const rightItem = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            leftItem.current.classList.add("show");
            rightItem.current.classList.add("show");
        }, 500);
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
    };

    return (
        <main className="select">
            <div className="select__info">
                <h1 className="select__info__title">16강</h1>
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
