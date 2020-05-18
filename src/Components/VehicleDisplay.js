import React from 'react';

const VehicleDisplay = props => (
    <div>
        <p>{props.vehicle.make} <br></br> {props.vehicle.model}</p>
    </div>
);

export default VehicleDisplay;