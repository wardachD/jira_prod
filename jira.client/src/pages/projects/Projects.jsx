import TableGrid from "../../compontents/table_grid/TableGrid";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import './Projects.css';
import * as Icon from 'react-bootstrap-icons';
import Multiselect from 'multiselect-react-dropdown';

function Projects() {

    return (
        <div className="w-100 p-4">
            <h3>Projekty</h3>
            <div className='col d-flex mt-8'>
                <div className='d-flex mb-4'>
                    <TextField
                        id="outlined-basic"
                        label="Wyszukaj projekty"
                        variant="outlined"
                        size="small"
                        InputProps={{
                            endAdornment: (
                                <IconButton size="small">
                                    <Icon.Search />
                                </IconButton>
                            ),
                        }}
                            />
                </div>
           
                <div className="mutliform-field d-flex">
                <Multiselect
                    displayValue="key"
                        placeholder="Wybierz produkty Jira"
                        hidePlaceholder="true"
                        avoidHighlightFirstOption="true"
                    options={[
                        {
                            cat: 'Group 1',
                            key: 'Jira Software'
                        },
                        {
                            cat: 'Group 2',
                            key: 'Jira Production'
                        },
                        {
                            cat: 'Group 3',
                            key: 'Jira API'
                        },
                        {
                            cat: 'Group 4',
                            key: 'Jira Documentation'
                        },
                        ]}
                        style={{
                            searchBox: {
                                marginLeft: '8px',
                                paddingLeft: '12px',
                                height: '40px',
                                width: 'auto'
                            },
                        
                        }}
                    showCheckbox
                    />
                    </div>
                </div>
            <TableGrid />
        </div>  
    );
}

export default Projects;
