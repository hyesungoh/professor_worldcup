import React from "react";

import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import HomeContainer from "pages/Home/HomeContainer";
import SelectContainer from "pages/Select/SelectContainer";
import ResultContainer from "pages/Result/ResultContainer";

const TransitionRouter = withRouter(({ location }) => (
    <TransitionGroup>
        <CSSTransition key={location.key} timeout={1000} classNames="door">
            <Switch location={location}>
                <Route path="/" exact component={HomeContainer} />
                <Route path="/select" component={SelectContainer} />
                <Route path="/result" component={ResultContainer} />
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
