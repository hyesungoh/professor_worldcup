import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

function SelectPresenter({ history, major, professors }) {
    const leftItem = useRef(null);
    const rightItem = useRef(null);

    console.log(major, professors);

    useEffect(() => {
        if (major === undefined || "") {
            history.push("/");
        }

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

        // 선택후 n초 후에 클래스 부여해서 없앤 다음에 다음 라운드로
        // 라운드는 어떻게 하지 ?
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
    return { major: state[0], professors: state[1] };
}

export default connect(mapStateToProps)(SelectPresenter);
