import ResultPresenter from "pages/Result/ResultPresenter";

const ResultContainer = ({ history }) => {
    const onClickReturn = () => {
        history.push("/");
    };

    return <ResultPresenter onClickReturn={onClickReturn}/>;
};

export default ResultContainer;
