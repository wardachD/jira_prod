import CustomTable from '../../../../compontents/custom_table/CustomTable.jsx';
import CircleBoxes from '../../../../utils/CircleBoxes.jsx';
import CustomDropdownWitchCheckboxes from '../../../../utils/CustomDropdownWitchCheckboxes.jsx'; 
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Dropdown from 'react-bootstrap/Dropdown';
import * as Icon from 'react-bootstrap-icons';
import './ProjectView.css';
import FilterDropdown from '../../../../compontents/projects/FilterDropdown.jsx';
import CustomButtonWithIcon from '../../../../compontents/custom_button_with_icon/CustomButtonWithIcon.jsx';

function ProjectView() {
    const handleClick = () => {
        console.log('Przycisk został kliknięty!');
    };

    return (
        <div className="projectview-container">
            <div className="row d-flex">
            <div className="col-2">
                    <h2>Oś czasu</h2>
                </div>
                <div className="d-flex col projects-buttons-column">
                    <div className="d-flex row projects-buttons-row">
                        <CustomButtonWithIcon
                            id="button-1"
                                icon={<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M10.881 5.48l-8.426 6.829c-.396.32-.582.956-.413 1.417l.099.272c.168.462.726.829 1.227.82l1.131-.02 6.062-.102 3.652-.063c.51-.01.788-.385.616-.861l-2.923-8.03c-.105-.288-.324-.441-.567-.441a.731.731 0 00-.458.179zM4.98 15.953l1.754 4.818a1 1 0 101.879-.684l-1.539-4.228-2.094.094zm13.711-9.111l-2.819 1.026a1 1 0 10.684 1.879l2.82-1.026a1 1 0 10-.685-1.88zm-1.792 3.845a1.006 1.006 0 00-.644.766 1.002 1.002 0 00.811 1.159l2.955.52a1 1 0 001.122-1.301l-.017-.047a.997.997 0 00-.758-.621l-2.955-.521a.974.974 0 00-.514.045zm-.548-7.639l-1.929 2.298a1 1 0 001.532 1.286l1.928-2.298a1.001 1.001 0 00-.765-1.643.993.993 0 00-.766.357z" fill="currentColor"></path></svg>} // Przekazanie ikony jako komponentu
                            text="Przekaż opinię" 
                                onClick={handleClick} 
                        />
                        <CustomButtonWithIcon
                            id="button-2"
                                icon={<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fill-rule="evenodd"><path d="M6 15a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 110-2 1 1 0 010 2zm12-4a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 110-2 1 1 0 010 2zm0 14a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 110-2 1 1 0 010 2z" fill-rule="nonzero"></path><path d="M7 13.562l8.66 5 1-1.732-8.66-5z"></path><path d="M7 10.83l1 1.732 8.66-5-1-1.732z"></path></g></svg>} // Przekazanie ikony jako komponentu
                                text="Udostępnij" 
                                onClick={handleClick} 
                            />
                        <CustomButtonWithIcon
                            id="button-3"
                                icon={<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M13 6.491V16a1 1 0 01-2 0V6.491L9.784 7.697a1.051 1.051 0 01-1.478 0 1.029 1.029 0 010-1.465l2.955-2.929a1.051 1.051 0 011.478 0l2.955 2.93c.408.404.408 1.06 0 1.464a1.051 1.051 0 01-1.478 0L13 6.49zM9 9v2H7c-.002 0 0 7.991 0 7.991 0 .004 9.994.009 9.994.009.003 0 .006-7.991.006-7.991 0-.006-2-.009-2-.009V9h2c1.105 0 2 .902 2 2.009v7.982c0 1.11-.897 2.009-2.006 2.009H7.006A2.009 2.009 0 015 18.991V11.01A2 2 0 017 9h2z" fill="currentColor"></path></svg>} // Przekazanie ikony jako komponentu
                                text="Eksportuj" 
                                onClick={handleClick} 
                                />
                     </div>
                </div>
            </div>
            <div className="row flex-nowrap col">
                <div className="d-flex  width-inherit">
                    <TextField
                        id="outlined-basic"
                        label=""
                        variant="outlined"
                        size="small"
                        className="project-search"
                        InputProps={{
                            endAdornment: (
                                <IconButton size="small">
                                    <Icon.Search />
                                </IconButton>
                            ),
                        }}
                    />

                    <CircleBoxes className="d-flex" />
                </div>
                <div className="d-flex  width-inherit">
                <div className="status-button d-flex" data-toggle="tooltip" data-placement="bottom" title="Kategoria statusu">
                    <CustomDropdownWitchCheckboxes
                        className="d"
                        buttonText="Kategoria statusu"
                        checkboxCount={3}
                        checkboxLabels={['Do zrobienia', 'W toku', 'Gotowe']}
                    />
                    </div>
                </div>
                <div className="status-button d-flex">
                    <CustomDropdownWitchCheckboxes
                        buttonText="Epik"
                        checkboxCount={1}
                        checkboxLabels={['task']}
                    />
                </div>
                <div className="filter-projects" data-toggle="tooltip" data-placement="bottom" title="Epik">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic-projects" className="custom-dropdown-projects bg-lightgray">
                            <IconButton size="small">
                                <Icon.Sliders />
                            </IconButton>
                        </Dropdown.Toggle>

                        <Dropdown.Menu >
                           <FilterDropdown />
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

            </div>
            <div className="row justify-content-center project-timeline">
                <CustomTable />
            </div>
        </div>
    );
}

export default ProjectView;
