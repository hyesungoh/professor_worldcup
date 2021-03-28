import React from "react";
import { connect } from "react-redux";

function SelectPresenter({ major }) {
    return <div>{major}</div>;
}

function mapStateToProps(state) {
    return { major: state };
}

export default connect(mapStateToProps)(SelectPresenter);
