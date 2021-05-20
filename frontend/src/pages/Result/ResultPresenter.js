import React from "react";

function ResultPresenter() {
    return (
        <main className="resultMain">
            <nav className="resultNav">
                <button className="resultNav__backBtn">{"<"} 다시하기</button>
                <div className="resultNav__header">
                    <h1>IT융합자율학부 랭킹</h1>
                    <span>2021년 5월 20일</span>
                </div>
            </nav>
            <section className="resultRanker">
                <div className="resultRanker__card"></div>
                <div className="resultRanker__card"></div>
                <div className="resultRanker__card"></div>
            </section>
            <section className="resultRanking"></section>
        </main>
    );
}

export default ResultPresenter;
