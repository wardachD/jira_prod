import CircleBoxes from '../../../../utils/CircleBoxes.jsx';
import CustomDropdownWitchCheckboxes from '../../../../utils/CustomDropdownWitchCheckboxes.jsx';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import * as Icon from 'react-bootstrap-icons';
import './ProjectDashboard.css';
import CustomButtonWithIcon from '../../../../compontents/custom_button_with_icon/CustomButtonWithIcon.jsx';
import DashboardTasksList from '../../../../compontents/dashboard_tasks_list/DashboardTasksList.jsx';

function ProjectDashboard() {
    const handleClick = () => {
        console.log('Przycisk został kliknięty!');
    };

    return (
        <div className="projectdashboard-container">
            <div className="row d-flex">
                <div className="col-2">
                    <h2>Tablica KAN</h2>
                </div>
                <div className="d-flex col projects-buttons-column">
                    <div className="d-flex row projects-buttons-row">
                        <CustomButtonWithIcon
                            id="button-3"
                            icon={<svg role="presentation" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14 5L10 19" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path><path d="M14 5L7 12H17L10 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>} // Przekazanie ikony jako komponentu
                            onClick={handleClick} 
                        />
                        <CustomButtonWithIcon
                            id="button-3"
                            icon={<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M12 16.373l3.98 2.193-.76-4.655 3.276-3.347-4.524-.69L12 5.687l-1.972 4.189-4.524.689L8.78 13.91l-.762 4.655L12 16.373zm0 2.283l-3.016 1.662a2 2 0 01-2.939-2.075l.599-3.656-2.57-2.624a2 2 0 011.129-3.377l3.47-.528 1.518-3.224a2 2 0 013.618 0l1.519 3.224 3.47.528a2 2 0 011.127 3.377l-2.569 2.624.599 3.656a2 2 0 01-2.94 2.075L12 18.656z" fill="currentColor"></path></svg>} // Przekazanie ikony jako komponentu
                            onClick={handleClick} 
                        />
                        <CustomButtonWithIcon
                            id="button-3"
                            icon={<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fill-rule="evenodd"><path d="M6 15a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 110-2 1 1 0 010 2zm12-4a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 110-2 1 1 0 010 2zm0 14a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 110-2 1 1 0 010 2z" fill-rule="nonzero"></path><path d="M7 13.562l8.66 5 1-1.732-8.66-5z"></path><path d="M7 10.83l1 1.732 8.66-5-1-1.732z"></path></g></svg>}                       // Przekazanie ikony jako komponentu
                            onClick={handleClick} 
                        />
                        <CustomButtonWithIcon
                            id="button-3"
                            icon={<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M16.587 6.003H15A1 1 0 0115 4h3.9l.047.001a.975.975 0 01.736.285l.032.032c.2.2.296.47.284.736l.001.048v3.896a1 1 0 11-2 0V7.411l-3.309 3.308a.977.977 0 01-1.374-.005l-.032-.032a.976.976 0 01-.005-1.374l3.307-3.305zM7.413 17.997H9A1 1 0 019 20H5.1l-.047-.001a.975.975 0 01-.736-.285l-.032-.032A.977.977 0 014 18.946a1.12 1.12 0 010-.048v-3.896a1 1 0 112 0v1.587l3.309-3.308a.977.977 0 011.374.005l.032.032a.976.976 0 01.005 1.374l-3.307 3.305z" fill="currentColor" fill-rule="evenodd"></path></svg>} // Przekazanie ikony jako komponentu

                            onClick={handleClick} 
                        />
                        <CustomButtonWithIcon
                            id="button-4"
                            icon={<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fill-rule="evenodd"><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg>}
                            onClick={handleClick} 
                        />
                        
                    </div>
                </div>
            </div>
            <div className="row flex-nowrap col  dashboard-header">
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
                    <p>GRUPUJ   </p>
                        <CustomDropdownWitchCheckboxes
                    id="dashboard-dropdown"
                        className="d"
                        buttonText="Brak"
                        checkboxCount={3}
                            checkboxLabels={['Do zrobienia', 'W toku', 'Gotowe']}
                            stylee={{ width: '50px !important' }}
                    />
                </div>
                    <div className="filter-projects d-flex" data-toggle="tooltip" data-placement="bottom" title="Epik">
                        <CustomButtonWithIcon
                            id="button-dashboard"
                            text="Wyświetl wszystko"
                            icon={<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor"><path d="M21 17H4.995C4.448 17 4 16.548 4 15.991V6a1 1 0 10-2 0v9.991A3.004 3.004 0 004.995 19H21a1 1 0 000-2zm-3-8v3a1 1 0 002 0V8a1 1 0 00-1-1h-4a1 1 0 000 2h3z"></path><path d="M13.293 13.707a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414L14 11.586l-2.293-2.293a1 1 0 00-1.414 0l-4 4a1 1 0 001.414 1.414L11 11.414l2.293 2.293z"></path></g></svg>}
                            
                            onClick={handleClick} 
                        />
                        <CustomButtonWithIcon
                            id="button-dashboard"
                            icon={<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fill-rule="evenodd"><path d="M3 7h3v2H3zm0 8h11v2H3zm7-8h11v2H10zm8 8h3v2h-3z"></path><path d="M11 8a3 3 0 11-5.999.001A3 3 0 0111 8zM9 8a1 1 0 10-1.999-.001A1 1 0 009 8zm10 8a3 3 0 11-5.999.001A3 3 0 0119 16zm-2 0a1 1 0 10-1.999-.001A1 1 0 0017 16z"></path></g></svg>}
                            text="Analizy"
                            onClick={handleClick} 
                        />
                    </div>
                </div>

            </div>
            <DashboardTasksList />
        </div>
    );
}

export default ProjectDashboard;
