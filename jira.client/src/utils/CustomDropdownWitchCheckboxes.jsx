import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

const CustomDropdownWitchCheckboxes = ({ buttonText, checkboxCount, checkboxLabels, id, stylee }) => {
    // Tworzenie tablicy z ilością określoną przez checkboxCount
    const checkboxes = Array.from(Array(checkboxCount).keys());

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" style={stylee} id="dropdown-basic-projects">
                {buttonText}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {checkboxes.map((index) => (
                    <Form.Check
                        title='button'
                        key={checkboxLabels[index] + index + 1}
                        className='px-5 form-projects'
                        type='checkbox'
                        id={checkboxLabels[index] + index + 1}
                        label={checkboxLabels[index]}
                    />
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default CustomDropdownWitchCheckboxes;
