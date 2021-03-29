import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

function SelectPresenter({ history, major }) {
    const leftItem = useRef(null);
    const rightItem = useRef(null);

    useEffect(() => {
        if (major === "") {
            history.push("/");
        }
    }, []);

    const onSelect = (e) => {
        // ref와 target이랑 비교하기
        
    };

    return (
        <main className="select">
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
