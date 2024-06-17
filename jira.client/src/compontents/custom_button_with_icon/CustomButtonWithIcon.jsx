import React from 'react';

function CustomButtonWithIcon({ icon, text, onClick, id }) {
    return (
        <div id={id} className="CustomButtonWithIcon" onClick={onClick}>
            <a href="#" className="link-no-styling">
                {icon}
                {text && <span>{text}</span>}
            </a>
        </div>
    );
}

export default CustomButtonWithIcon;
