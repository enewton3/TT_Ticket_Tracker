import React from "react";
import '../../containers/ChatContainer/ChatContainer.css'

export default function Messages(props){

    const messages = props.messages

    return (
        <ul className="Messages-list">
            
            {messages.map(m => {

                const {member, text} = m;
                const {currentMember} = props;    
                const messageFromMe = (currentMember) && (member.id === currentMember.id); // checking if this is me
                const className = messageFromMe ? "Messages-message currentMember" : "Messages-message"; // conditional class rendering
            
                return(
                    <li className={className} key={m}>
                        <span className="avatar" style={{backgroundColor: member.color}}/>
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
