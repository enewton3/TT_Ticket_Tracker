import React from "react";

export default function Messages(props){

    messages = props.messages

    return (
      <ul className="Messages-list">
        {messages.map(message => {
            <li>{message}</li>
        })}
       
      </ul>
    );

}