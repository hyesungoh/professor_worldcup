import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

import { actionCreators } from "store/store";
import Loading from "components/Loading";
import background from "static/images/skhu_background.jpeg";

function HomePresenter({ history, selectMajor, isLoading, professors }) {
    const [myMajor, setMyMajor] = useState("");
    const LOADING_END_CN = "loading--end";

    useEffect(() => {
        selectMajor("");
    }, []);

    const majors = [
        "IT융합자율학부",
        "인문융합자율학부",
        "사회융합자율학부",
        "미디어콘텐츠융합자율학부",
    ];

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

    if (isLoading) {
        return <Loading />;
    } else {
        return (
            <main>
                <div className="left">
                    <img
                        className="background"
                        src={background}
                        alt="background"
                    />
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
