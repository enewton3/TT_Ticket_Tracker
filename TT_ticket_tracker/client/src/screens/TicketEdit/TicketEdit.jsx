import React, { useState, useEffect } from "react";
import { getTicket } from "../../services/Tickets";
import "./TicketEdit.css";

export default function TicketDetail(props) {

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
}
