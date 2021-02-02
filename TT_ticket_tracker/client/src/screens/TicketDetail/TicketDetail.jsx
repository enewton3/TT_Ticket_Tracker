import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { getTicket, deleteTicket } from "../../services/Tickets";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import "./TicketDetail.css";

export default function TicketDetail(props) {
  const [ticket, setTicket] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchTicket = async () => {
      const ticket = await getTicket(id);
      console.log('here')
      setTicket(ticket);
      setLoaded(true);
    };
    fetchTicket();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }
  const onTicketDelete = (e) => {
    e.preventDefault();
    deleteTicket(id).then(() => history.push("/tickets"));
  };

  return (
    <div className="ticket-detail-div">
      <div className="ticket-info">
        <div className="ticket-id">{id}</div>
        <div className="ticket-title">{ticket.title}</div>
        <div className="ticket-description">{ticket.description}</div>
        <div className="ticket-status">{ticket.status}</div>
      </div>

      {props.currentUser ? (
        <div className="button-div">
          <Button
            className="edit-button-detail"
            variant="contained"
            color="primary"
          >
        <Link to={`/ticket/edit/${ticket.id}`}>Edit</Link>
          </Button>
          <Button
            className="delete-button"
            variant="contained"
            onClick={onTicketDelete}
            color="secondary"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </div>
      ) : null}
    </div>
  );
}
