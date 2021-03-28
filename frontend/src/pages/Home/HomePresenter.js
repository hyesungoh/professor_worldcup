import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

import background from "static/images/skhu_background.jpeg";

function HomePresenter({ history }) {
    const [myMajor, setMyMajor] = useState("");

    const majors = [
        "IT융합자율학부",
        "인문융합자율학부",
        "사회융합자율학부",
        "미디어컨텐츠융합자율학부",
    ];

    const onChange = (e) => {
        setMyMajor(e.target.value);
    };

    const onSubmit = () => {
        
        history.push("/select");
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

                <Button onClick={onSubmit} variant="contained" color="primary">
                    우리과 최고의 교수님은?
                </Button>
            </div>
        </main>
    );
}

export default HomePresenter;
