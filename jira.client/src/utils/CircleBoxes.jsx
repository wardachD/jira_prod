import React from 'react';
import './CircleBoxes.css'; 
import * as Icon from 'react-bootstrap-icons';

function CircleBoxes() {
    return (
        <div className="circle-container">
        
            <div className="circle" id="circle1" data-toggle="tooltip" data-placement="bottom" title="Damian Wardach"><a href="#" className="link text-dark">DW</a></div>
            <div className="circle" id="circle2" data-toggle="tooltip" data-placement="bottom" title="Nie przypisano"><a href="#" className="text-light"><Icon.PersonFill /></a></div>
            <div className="circle" id="circle3" data-toggle="tooltip" data-placement="bottom" title="Dodaj osoby"><a href="#" className="link text-dark"><Icon.PersonPlusFill /></a></div>
        </div>
    );
}

export default CircleBoxes;
