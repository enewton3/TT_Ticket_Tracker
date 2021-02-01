import { useState } from "react";
import Messages from '../../components/Messages/Messages'
import Input from '../../components/Input/Input'

export default function ChatContainer(props) {

    const [messages, setMessages] = useState([{
        text: "This is a test message!",
        member: {
            color: "blue",
            username: "bluemoon"
        } 
    }])

    function randomColor() {
        return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
    }

    const onSendMessage = (text) => {
        const thread = [...messages]
        thread.push({
            text: text,
            member: props.currentUser
        })
        setMessages(thread)
    }

    return(
        <>
            <Messages messages={messages} currentMember={props.currentUser} />
            <Input onSendMessage={onSendMessage} />
        </>
    )
}