import React, { useState, useEffect } from "react";
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


}