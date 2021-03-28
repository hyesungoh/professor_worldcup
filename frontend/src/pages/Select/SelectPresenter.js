import React, { useEffect } from "react";
import { connect } from "react-redux";

function SelectPresenter({ history, major }) {
    useEffect(() => {
        if (major === "") {
            history.push("/");
        }
    }, []);

    return (
        <main className="select">
            <div className="left">{major}</div>
            <div className="right">{major}</div>
        </main>
    );
}

function mapStateToProps(state) {
    return { major: state };
}

export default connect(mapStateToProps)(SelectPresenter);
