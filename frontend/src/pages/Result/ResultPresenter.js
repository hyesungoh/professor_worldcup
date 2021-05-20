import React from "react";

function ResultPresenter({ onClickReturn, ranking }) {
    return (
        <main className="resultMain">
            <nav className="resultNav">
                <button className="resultNav__backBtn" onClick={onClickReturn}>
                    {"<"} 다시하기
                </button>
                <div className="resultNav__header">
                    <h1>IT융합자율학부 랭킹</h1>
                    <span>2021년 5월 20일</span>
                </div>
            </nav>
            <section className="resultRanker">
                <div className="resultRanker__card">
                    {ranking[0].professorName}
                    {ranking[0].firstCount}
                </div>
                <div className="resultRanker__card">
                    {ranking[1].professorName}
                    {ranking[1].firstCount}
                </div>
                <div className="resultRanker__card">
                    {ranking[2].professorName}
                    {ranking[2].firstCount}
                </div>
            </section>
            <section className="resultRanking">
                {ranking.slice(3).map((rank, index) => (
                    <div key={index} className="resultRanking__card">
                        {rank.professorName}
                        {rank.firstCount}
                    </div>
                ))}
            </section>
        </main>
    );
}

export default ResultPresenter;
