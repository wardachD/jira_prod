import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const CustomDropdown = () => {
    const options = ['12 miesięcy', '9 miesięcy', '6 miesięcy', '3 miesiące'];

    return (
        <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic-filter" >
                {options[0]}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {options.map((option, index) => (
                    <Dropdown.Item key={index}>{option}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default CustomDropdown;
