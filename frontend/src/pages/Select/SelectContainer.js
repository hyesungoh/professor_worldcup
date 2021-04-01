import React, { Component } from "react";
import { connect } from "react-redux";

import SelectPresenter from "pages/Select/SelectPresenter";

class SelectContainer extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    // componentDidMount() {
    //     if()
    // }

    render() {
        const { history, major, professors } = this.props;
        return (
            <SelectPresenter
                history={history}
                major={major}
                professors={professors}
            />
        );
    }
}
function mapStateToProps(state) {
    return { major: state[0], professors: state[1] };
}

export default connect(mapStateToProps)(SelectContainer);
