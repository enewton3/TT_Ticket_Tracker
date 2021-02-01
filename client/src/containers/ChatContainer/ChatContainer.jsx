import { useState } from "react";
import Messages from '../../components/Messages/Messages'
import Input from '../../components/Input/Input'

export default function ChatContainer() {

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