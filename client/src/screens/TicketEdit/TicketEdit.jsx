import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getTicket, updateTicket } from "../../services/Tickets";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import "./TicketEdit.css";


export default function TicketEdit(props) {
  const [ticket, setTicket] = useState({
    id: "",
    title: "",
    description: "",
    status: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchTicket = async () => {
      const ticket = await getTicket(id);
      setTicket(ticket);
    };
    fetchTicket();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTicket({
      ...ticket,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await updateTicket(id, ticket);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/ticket/${id}`} />;
  }

  return props.currentUser ? (

      <div className="product-edit-div">
        <form className="editdiv" onSubmit={handleSubmit}>
          <h4>Title</h4>
          <TextField
            className="title"
            placeholder="Title"
            value={ticket.title}
            name="title"
            required
            variant="outlined"
            autoFocus
            onChange={handleChange}
          />
          <h4>Description</h4>
          <TextField
            className="description"
            placeholder="Description"
            value={ticket.description}
            name="description"
            required
            variant="outlined"
            onChange={handleChange}
          />
          <h4>Status</h4>
          <TextField
            placeholder="Status"
            value={ticket.status}
            name="status"
            required
            variant="outlined"
            onChange={handleChange}
          />
          <Button
            type="submit"
            className="save-button"
            variant="contained"
            color="secondary"
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </form>
      </div>
  ) : (
    <>Not Authorized</>
  );
}
