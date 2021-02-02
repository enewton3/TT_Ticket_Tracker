import React from "react";
import '../../containers/ChatContainer/ChatContainer.css'

export default function Messages(props){

    const messages = props.messages

    return (
        <ul className="Messages-list">
            
            {messages.map((m, index) => {

                const {member, text} = m;
                const {currentUser, currentMember} = props;   
                const messageFromMe = (currentUser) && (member.id === currentMember.id); // checking if this is me
                const className = messageFromMe ? "Messages-message currentMember" : "Messages-message"; // conditional class rendering
            
                return(
                    <li className={className} key={index}>
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
