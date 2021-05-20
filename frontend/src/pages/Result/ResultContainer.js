import Loading from "components/Loading";
import ResultPresenter from "pages/Result/ResultPresenter";
import { useEffect, useState } from "react";

const ResultContainer = ({ history, location }) => {
    const [ranking, setRanking] = useState([]);

    useEffect(() => {
        setRanking(location.state.data);
    }, []);

    const onClickReturn = () => {
        history.push("/");
    };

    if (ranking.length === 0) return <Loading />;
    return <ResultPresenter onClickReturn={onClickReturn} ranking={ranking} />;
};

export default ResultContainer;
