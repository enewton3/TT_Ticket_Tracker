import React from "react";

export default function Messages(props){

    //messsages should be an array
    const messages = props.messages.message

    return (
      <ul className="Messages-list">
            {/* use the map function here to map through messages array */}
            <li>{messages}</li> 
      </ul>
    );

}
