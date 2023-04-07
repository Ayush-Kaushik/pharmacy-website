import React, {Suspense} from 'react';
import {
    Switch,
    Route,
    useLocation
} from "react-router-dom";
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";

import TopNavigation from "../components/navigation/TopNavigation";
import Footer from "../components/marginals/Footer";
import Pharmacy from "./Pharmacy";
import Clinic from "./Clinic";
import NotFound from "./NotFound";
import Home from "./Home";


function AnimatedSwitch() {
    let location = useLocation();

    return (
        <div>
            <Suspense fallback={<div>{"Loading..."}</div>}>
                <TopNavigation/>
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        classNames="fade"
                        timeout={300}
                    >
                        <Switch location={location}>
                            <Route exact path={"/"}>
                                <Home/>
                            </Route>

                            <Route exact path={"/pharmacy"}>
                                <Pharmacy/>
                            </Route>

                            <Route exact path={"/clinic"}>
                                <Clinic/>
                            </Route>

                            <Route>
                                <NotFound/>
                            </Route>

                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer/>
            </Suspense>
        </div>
    );
}

export default AnimatedSwitch;
