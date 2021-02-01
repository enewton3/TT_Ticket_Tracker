import React from "react";
import '../../containers/ChatContainer/ChatContainer.css'

export default function Messages(props){

    const messages = props.messages

    return (
      <ul className="Messages-list">

            {messages.map(m => {
            
                const {member, text} = m;
                const {currentMember} = props;

                // checking if this is me
                const messageFromMe = (currentMember) && (member.id === currentMember.id); 

                // conditional class rendering
                const className = messageFromMe ?
                "Messages-message currentMember" : "Messages-message";
            
                return(
                    <li className={className}>
                    <span
                      className="avatar"
                      style={{backgroundColor: member.color}}
                    />
                    <div className="Message-content">
                      <div className="username">
                        {member.username}
                      </div>
                      <div className="text">{text}</div>
                    </div>
                  </li>
                )
            })}
      </ul>
    );

}
