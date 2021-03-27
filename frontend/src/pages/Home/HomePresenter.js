import React, { useState } from "react";

import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { MenuItem, Select } from "@material-ui/core";

function HomePresenter() {
    const majors = [
        "IT융합자율학부",
        "인문융합자율학부",
        "사회융합자율학부",
        "미디어컨텐츠융합자율학부",
    ];

    const [myMajor, setMyMajor] = useState(majors[0]);

    const onClick = (e) => {
        setMyMajor(e.target.dataset.value);
    };

    return (
        <main className="home">
            <Select value={myMajor}>
                {majors.map((major, index) => (
                    <MenuItem key={index} onClick={onClick} value={major}>
                        {major}
                    </MenuItem>
                ))}
            </Select>

            {/* <Button variant="contained" color="primary">
                HELLO WORLD
            </Button>

            <Link to="/select">toSELECT</Link>
            <Link to="/result">toRESULT</Link> */}
        </main>
    );
}

export default HomePresenter;
