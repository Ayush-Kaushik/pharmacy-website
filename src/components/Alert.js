import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";

function displayError(alerts) {
    return alerts.map((alert) => (<p key={`alert`}><FontAwesomeIcon icon={faExclamationTriangle}/> {alert}</p>))
}

function Alert(props) {
    return (
        <div className="alert-layout">
            {displayError(props.alerts)}
        </div>
    );
}

export default Alert;