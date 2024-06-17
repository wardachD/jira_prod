import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";

const columns = [
    { field: 'star', headerName: '⭐', width: 20 },
    { field: 'nazwa', headerName: 'Nazwa', flex: 1,
        renderCell: (params) => {
            const navigate = useNavigate();
            const handleClick = () => {
                navigate(`/projekty/ProjectView`); 
            };
            return <div onClick={handleClick}>Projekt 1</div>;
            }
        },

    { field: 'klucz', headerName: 'Klucz', flex: 1 },
    { field: 'typ', headerName: 'Typ', flex: 1 },
    { field: 'lider', headerName: 'Lider', description: 'This column has a value getter and is not sortable.', align: 'left', flex: 1 },
    { field: 'wiecej', headerName: 'Więcej czynności', headerAlign: 'right', align: 'right', width: 200, flex: 1 },
];

const rows = [
    { id: '1', star: '⭐', nazwa: 'Kanban', klucz: 'FIFO', typ: 35, lider: 'Damian', wiecej: 'Więcej' },
];

const customStyles = {
    root: {
        border: 'none',
    },
};

export default function TableGrid() {
    return (
        <div style={{ height: 400, width: 'auto' }}>
            <DataGrid
                columns={columns}
                rows={rows}
                autoHeight
                pageSize={5}
                classes={customStyles}
            />
        </div>
    );
}
