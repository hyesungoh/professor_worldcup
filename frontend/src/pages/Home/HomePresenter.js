import React from "react";

import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "pages/Home/home.css";

function HomePresenter() {
    return (
        <main>
            <Button variant="contained" color="primary">
                HELLO WORLD
            </Button>

            <Link to="/select">toSELECT</Link>
            <Link to="/result">toRESULT</Link>
        </main>
    );
}

export default HomePresenter;
