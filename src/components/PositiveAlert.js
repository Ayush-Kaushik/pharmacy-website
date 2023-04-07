import React from 'react';

function PositiveAlert(props) {
    return (
        <div className="positive-alert-layout">
            <div>
                {props.children}
            </div>
        </div>
    );
}

export default PositiveAlert;