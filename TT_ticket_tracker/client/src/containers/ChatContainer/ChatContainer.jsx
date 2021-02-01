import { useState } from "react";
import Messages from '../../components/Messages/Messages'
import Input from '../../components/Input/Input'

export default function ChatContainer() {

    // This will instantiate a new instance of Scaledrone
    drone = new window.Scaledrone("tt-app", {

        data: this.state.member
  
        drone.on('open', error => {
          if (error) {
            return console.error(error);
          }
          const member = {...this.state.member};
          member.id = drone.clientId;
          this.setState({member});
        });
    }






    const [messages, setMessages] = useState({
        message  : 'testing chat',
    });

    const onSendMessage = (text) => {
        const messages = this.state.messages
        messages.push({
            text: messages,
            // member: this.state.member
        })
        setMessages({messages: messages})
    }

    return(
        <>
            <Messages messages={messages}/>
            <Input onSendMessage={onSendMessage} />
        </>
    )
}


// messages as an array state