import React from "react";

import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import HomePresenter from "pages/Home/HomePresenter";
import ResultPresenter from "pages/Result/ResultPresenter";
import SelectPresenter from "pages/Select/SelectPresenter";

const TransitionRouter = withRouter(({ location }) => (
    <TransitionGroup>
        <CSSTransition key={location.key} timeout={1000} classNames="door">
            <Switch location={location}>
                <Route path="/" exact component={HomePresenter} />
                <Route path="/select" component={SelectPresenter} />
                <Route path="/result" component={ResultPresenter} />
            </Switch>
        </CSSTransition>
    </TransitionGroup>
));

function MyRouter() {
    return (
        <BrowserRouter>
            <TransitionRouter />
        </BrowserRouter>
    );
}

export default MyRouter;