import { useState } from "react";
import Messages from '../../components/Messages/Messages'
import Input from '../../components/Input/Input'
import './ChatContainer.css'

export default function ChatContainer(props) {

    /////////// ------------------------------------ Creating New Scaledrone Instance
    const drone = new window.Scaledrone("T6DViaUTalCL0het", {
        data: props.currentUser
    });

    drone.on('open', error => {
        if (error) {
            return console.error(error);
        }

        /////////// ----------------------------------These lines
        const member = {...messages.member} // pulling member out of state
        member.id = drone.clientId          // adding id to member?
        setMessages({member})               // resetting state with new id?
    });





    /////////// ------------------------------------ Setting State
    const [messages, setMessages] = useState([{
        text: "This is a test message!",
        member: {
            color: randomColor(),
            username: 'bluemoon'
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