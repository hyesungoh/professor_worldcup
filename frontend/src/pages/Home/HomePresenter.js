import React from "react";

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

    return (
        <main className="home">
            <Select value={majors[0]}>
                {majors.map((major) => (
                    <MenuItem value={major}>{major}</MenuItem>
                ))}
            </Select>

            <Button variant="contained" color="primary">
                HELLO WORLD
            </Button>

            <Link to="/select">toSELECT</Link>
            <Link to="/result">toRESULT</Link>
        </main>
    );
}

export default HomePresenter;
