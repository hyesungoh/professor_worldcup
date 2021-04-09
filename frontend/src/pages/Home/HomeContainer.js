import React, { useState, useEffect } from "react";
import HomePresenter from "pages/Home/HomePresenter";

import axios from "axios";

function HomeContainer({ history }) {
    const [professors, setProfessors] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const IT_DEPART_URL = "http://localhost:8080/user/1";
    const HUMAN_DEPART_URL = "http://localhost:8080/user/2";
    const SOCIETY_DEPART_URL = "http://localhost:8080/user/3";
    const MEDIA_DEPART_URL = "http://localhost:8080/user/4";

    useEffect(() => {
        const getProfessors = async () => {
            try {
                const data = await Promise.all([
                    axios.get(IT_DEPART_URL),
                    axios.get(HUMAN_DEPART_URL),
                    axios.get(SOCIETY_DEPART_URL),
                    axios.get(MEDIA_DEPART_URL),
                ]).then((values) => {
                    const valuesData = {};
                    values.map((value, index) => {
                        switch (index) {
                            case 0:
                                valuesData["IT융합자율학부"] = value.data;
                                break;
                            case 1:
                                valuesData["인문융합자율학부"] = value.data;
                                break;
                            case 2:
                                valuesData["사회융합자율학부"] = value.data;
                                break;
                            case 3:
                                valuesData["미디어콘텐츠융합자율학부"] =
                                    value.data;
                                break;
                            default:
                                break;
                        }
                    });
                    return valuesData;
                });
                setProfessors(data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        getProfessors();
    }, []);
    return (
        <HomePresenter
            isLoading={isLoading}
            professors={professors}
            history={history}
        />
    );
}

export default HomeContainer;
