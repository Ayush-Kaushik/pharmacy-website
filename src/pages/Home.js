import Hero from "../components/marginals/Hero";
import Alert from "../components/Alert";
import {MIDDLE_ALERT, TOP_ALERT} from "../content";
import Information from "./Information";
import OpeningHours from "./OpeningHours";
import React from "react";

const Home = () => {
    return (
        <div>
            <Hero/>
            <Information/>
            <Alert key={`alert-0`} alerts={TOP_ALERT}/>
            <OpeningHours/>
            <Alert key={`alert-1`} alerts={MIDDLE_ALERT}/>
        </div>


    )
};

export default Home;