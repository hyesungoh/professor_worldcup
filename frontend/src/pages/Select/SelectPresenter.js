import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

function SelectPresenter({ history, major }) {
    const leftItem = useRef(null);
    const rightItem = useRef(null);

    useEffect(() => {
        if (major === "") {
            history.push("/");
        }

        setTimeout(() => {
            leftItem.current.classList.add("show");
            rightItem.current.classList.add("show");
        }, 500);
    }, []);

    const onSelect = (e) => {
        console.log(e.target === leftItem.current);
        if (e.target === leftItem.current) {
            leftItem.current.classList.add("select--leftSelected");
            rightItem.current.classList.add("select--rightNotSelected");
        } else {
            leftItem.current.classList.add("select--leftNotSelected");
            rightItem.current.classList.add("select--rightSelected");
        }
    };

    return (
        <main className="select">
            <div className="select__info">
                <h1 className="select__info__title">16강</h1>
                <p className="select__info__major">{major}</p>
            </div>

            <div className="left">
                <div
                    ref={leftItem}
                    onClick={onSelect}
                    className="select__item"
                ></div>
            </div>
            <div className="right">
                <div
                    ref={rightItem}
                    onClick={onSelect}
                    className="select__item"
                ></div>
            </div>
        </main>
    );
}

function mapStateToProps(state) {
    return { major: state };
}

export default connect(mapStateToProps)(SelectPresenter);
