import React from 'react';
import {CLINIC_HOURS, PHARMACY_HOURS} from "../content";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons";

const layoutHoursBlocks = (Information, today) => {
    return (
        <div>
            {
                Information.map((item, index) => {
                    if (index === (today - 1)) {
                        return (
                            <div key={index} className={"hour-item-layout today"}>
                                <p key={`p-${index}`}>{item.DAY}</p>
                                <p key={`pp-${index}`}>{item.TIME}</p>
                            </div>
                        )
                    }

                    return (
                        <div key={index} className={"hour-item-layout"}>
                            <p key={`p-${index}`}>{item.DAY}</p>
                            <p key={`pp-${index}`}>{item.TIME}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}


function OpeningHours() {
    const today = new Date().getDay();

    return (
        <div className={"hours-layout"}>
            <h1>{"Hours of Operation"} <span><FontAwesomeIcon icon={faClock}/></span></h1>
            <div className={"container"}>
                <div className={"hours-block"}>
                    <h2>{"Clinic"}</h2>
                    {layoutHoursBlocks(CLINIC_HOURS, today)}
                </div>

                <div className={"hours-block"}>
                    <h2>{"Pharmacy"}</h2>
                    {layoutHoursBlocks(PHARMACY_HOURS, today)}
                </div>
            </div>
        </div>
    );
}

export default OpeningHours;