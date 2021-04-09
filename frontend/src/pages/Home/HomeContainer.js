import React, { useState, useEffect } from "react";
import HomePresenter from "pages/Home/HomePresenter";

import axios from "axios";

function HomeContainer() {
    const [professors, setProfessors] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const itDepart = "http://localhost:8080/user/1";
    const humanDepart = "http://localhost:8080/user/2";
    const socieDepart = "http://localhost:8080/user/3";
    const mediaDepart = "http://localhost:8080/user/4";

    useEffect(() => {
        const getProfessors = async () => {
            try {
                const data = await Promise.all([
                    axios.get(itDepart),
                    axios.get(humanDepart),
                    axios.get(socieDepart),
                    axios.get(mediaDepart),
                ]).then((values) => {
                    const DATA = [];
                    values.map((value) => {
                        const { data } = value;
                        DATA.push(data);
                    });
                    return DATA;
                });
                setProfessors(data);
                setIsLoading(false);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };
        getProfessors();
    }, []);
    return <HomePresenter />;
}

export default HomeContainer;
