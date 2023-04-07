import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEnvelopeOpen, faFax, faPhoneAlt, faUserMd, faMapMarked } from "@fortawesome/free-solid-svg-icons";
import { CLINIC_INFO, clinicServices, doctors } from "../content";
import PositiveAlert from "../components/PositiveAlert";

const Clinic = () => {

    const layoutInformationBlocks = (Information) => {
        return (
            <div>
                <p><span><FontAwesomeIcon icon={faPhoneAlt} /></span> {Information.phone}</p>
                <p><span><FontAwesomeIcon icon={faFax} /></span> {Information.fax}</p>
                <p><span><FontAwesomeIcon icon={faEnvelopeOpen} /></span> {Information.email}</p>
                <p><span><FontAwesomeIcon icon={faMapMarked} /></span> {Information.address}</p>
            </div>
        );
    }

    const renderClinicServices = () => {
        return clinicServices.map((serviceItem, index) => {
            return (
                
                <ul>
                    <span>{serviceItem.heading}</span>
                    {
                        serviceItem.serviceList.map((item, itemIndex) => {
                            return <li key={`service-${index}${itemIndex}`}><h4><span><FontAwesomeIcon icon={faCheck} /></span> {item}</h4></li>
                        })
                    }
                </ul>
            )
        });
    }

    const renderDoctors = () => {
        return doctors.map((item, index) => {
            return (
                <div key={`doctors-${index}`}><span><FontAwesomeIcon icon={faUserMd} /></span><h4>{item}</h4></div>
            )
        });
    }

    return (
        <div>
            <div className={"aboutus-layout"}>
                <h1>{"Clinic Details"}</h1>
                <div>{layoutInformationBlocks(CLINIC_INFO)}</div>
            </div>

            <PositiveAlert>
                <h2>{"We are Multilingual!"}</h2>
                <h4>{"We speak Punjabi, Hindi, Urdu, English, Spanish and Sindhi"}</h4>
            </PositiveAlert>

            <div className={"service-list"}>
                <h1>{"Our Services"}</h1>
                <div>
                    <ul>
                        {renderClinicServices()}
                    </ul>
                </div>
            </div>

            <PositiveAlert>
                <h3>{"If you have any questions regarding the medical services our walk-in clinic provides. Please don't hesitate to call/ email us:"}</h3>
                <h4>{"905-846-5355"}</h4>
                <h4>{"lormelmedical@gmail.com"}</h4>
            </PositiveAlert>

            <div className={"pharmacist-layout"}>
                <h1>{"Meet our Doctors"}</h1>
                <div>{renderDoctors()}</div>
            </div>
        </div>
    )
};


export default Clinic;