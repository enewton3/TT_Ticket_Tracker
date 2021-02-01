import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';


export default function Tickets() {

    const columns = [
        { field: 'title', headerName: 'Title', width: 300 },
        { field: 'description', headerName: 'Description', width: 700 },
        { field: 'status', headerName: 'Status', width: 100 },
    ];

    const rows = [
        { id: 1, title: 'when an unknown printer took', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it', status: 'open' },
        { id: 2, title: 'when an unknown printer took' , description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it', status: 'open' },
        { id: 3, title: 'when an unknown printer took', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it', status: 'open' },
    ];



    return(

        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
    )
}