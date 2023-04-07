import React from 'react';
import {PHARMACY_INFO, CLINIC_INFO} from "../content";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhoneAlt, faFax, faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons";

const layoutInformationBlocks = (Information) => {
    return (
        <div className={"contact-layout"}>
            <h2>{Information.name}</h2>
            <p><span><FontAwesomeIcon icon={faPhoneAlt}/></span> {Information.phone}</p>
            <p><span><FontAwesomeIcon icon={faFax}/></span> {Information.fax}</p>
            <p><span><FontAwesomeIcon icon={faEnvelopeOpen}/></span> {Information.email}</p>
        </div>
    );
}

function Information() {
    return (
        <div className={"information-layout"}>
            {layoutInformationBlocks(CLINIC_INFO)}
            {layoutInformationBlocks(PHARMACY_INFO)}
        </div>
    );
}

export default Information;