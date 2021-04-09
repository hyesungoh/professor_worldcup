import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

import { actionCreators } from "store/store";
import background from "static/images/skhu_background.jpeg";

function HomePresenter({ history, selectMajor }) {
    const [myMajor, setMyMajor] = useState("");

    useEffect(() => {
        selectMajor("");
    }, []);

    const majors = [
        "IT융합자율학부",
        "인문융합자율학부",
        "사회융합자율학부",
        "미디어콘텐츠융합자율학부",
    ];

    const professors = {
        IT융합자율학부: ["아이티1", "아이티2", "아이티3", "아이티4"],
        인문융합자율학부: ["인문1", "인문2", "인문3", "인문4"],
        사회융합자율학부: ["사회1", "사회2", "사회3", "사회4"],
        미디어콘텐츠융합자율학부: ["미컨1", "미컨2", "미컨3", "미컨4"],
    };

    const onChange = (e) => {
        setMyMajor(e.target.value);
    };

    const onSubmit = () => {
        if (myMajor !== "") {
            selectMajor(myMajor, professors[myMajor]);
            history.push("/select");
        } else {
            alert("선택해주세용");
        }
    };

    return (
        <main>
            <div className="left">
                <img className="background" src={background} alt="background" />
            </div>
            <div className="right home">
                <FormControl>
                    <InputLabel id="major-label">
                        전공을 선택해주세요
                    </InputLabel>
                    <Select
                        labelid="major-label"
                        className="home__select"
                        onChange={onChange}
                        value={myMajor}
                    >
                        <MenuItem value="">고민 좀 할게요</MenuItem>
                        {majors.map((major, index) => (
                            <MenuItem key={index} value={major}>
                                {major}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <Button
                    className="home__btn"
                    onClick={onSubmit}
                    variant="contained"
                    color="primary"
                >
                    우리과 최고의 교수님은?
                </Button>
            </div>
        </main>
    );
}

const mapStateToProps = (state) => {
    return { major: state };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectMajor: (text, professors) =>
            dispatch(actionCreators.selectMajor(text, professors)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePresenter);
