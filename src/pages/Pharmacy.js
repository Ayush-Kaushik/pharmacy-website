import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faEnvelopeOpen, faFax, faPhoneAlt, faUserMd, faMapMarked} from "@fortawesome/free-solid-svg-icons";
import {freePharmacyServices, pharmacists, PHARMACY_INFO} from "../content";
import PositiveAlert from "../components/PositiveAlert";

const Pharmacy = () => {

    const layoutInformationBlocks = (Information) => {
        return (
            <div>
                <p><span><FontAwesomeIcon icon={faPhoneAlt}/></span> {Information.phone}</p>
                <p><span><FontAwesomeIcon icon={faFax}/></span> {Information.fax}</p>
                <p><span><FontAwesomeIcon icon={faEnvelopeOpen}/></span> {Information.email}</p>
                <p><span><FontAwesomeIcon icon={faMapMarked}/></span> {Information.address}</p>
            </div>
        );
    }

    const renderFreeServices = () => {
        return freePharmacyServices.map((item, index) => {
            return (
                <li key={`service-${index}`}><h4><span><FontAwesomeIcon icon={faCheck}/></span> {item}</h4></li>
            )
        });
    }

    const renderPharmacists = () => {
        return pharmacists.map((item, index) => {
            return (
                <div key={`pharmacist-${index}`}><span><FontAwesomeIcon icon={faUserMd}/></span><h4>{item}</h4></div>
            )
        });
    }

    return (
        <div>
            <div className={"aboutus-layout"}>
                <h1>{"Pharmacy Details"}</h1>
                <div>{layoutInformationBlocks(PHARMACY_INFO)}</div>
            </div>

            <div className={"service-list"}>
                <h1>{"Our Services"}</h1>
                <div>
                    <ul>
                        {renderFreeServices()}
                    </ul>
                </div>
            </div>

            <PositiveAlert>
                <h2>{"Questions for us?"}</h2>
                <h4>{"Call us Today: 905-846-5355"}</h4>
            </PositiveAlert>

            <div className={"pharmacist-layout"}>
                <h1>{"Meet our Pharmacists"}</h1>
                <div>{renderPharmacists()}</div>
            </div>

            <PositiveAlert>
                <h2>{"Running out of Prescription?"}</h2>
                <h4>{"Call us Today: 905-846-5355"}</h4>
            </PositiveAlert>
        </div>
    )
};


export default Pharmacy;