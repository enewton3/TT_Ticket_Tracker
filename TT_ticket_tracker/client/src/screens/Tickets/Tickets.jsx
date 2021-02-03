import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTickets } from "../../services/Tickets";
import './Tickets.css'

export default function Tickets(props) {

    const [tickets, setTickets] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const ticketsResponse = async () => {
          const response = await getTickets();
          setTickets(response);
        };
        ticketsResponse();
    }, []);

    const handleClick = (e) => {
        history.push(`/ticket/${e.row.id}`)
    }
    

    
    // --------------------------- Setting up table with Material UI
    const columns = [
        { field: 'title', headerName: 'Title', width: 300 },
        { field: 'description', headerName: 'Description', width: 700 },
        { field: 'status', headerName: 'Status', width: 100 },
    ];



    // --------------------------- Inserting data into table
    const ROWS = tickets.map((ticket, index) =>{
        return { id: ticket.id, title: ticket.title, description: ticket.description, status: ticket.status }
    });



    return( 
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid 
                hover
                onRowClick={handleClick}
                rows={ROWS}
                columns={columns}
                pageSize={5}
            />
        </div>
    )
}