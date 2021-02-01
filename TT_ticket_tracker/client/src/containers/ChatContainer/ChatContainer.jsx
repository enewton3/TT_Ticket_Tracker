import { useState } from "react";
import Messages from '../../components/Messages/Messages'
import Input from '../../components/Input/Input'
import './ChatContainer.css'

export default function ChatContainer(props) {



    /////////// ------------------------------------ Setting States
    const [messages, setMessages] = useState([{
        text: "This is a test message!",
        member: {
            color: 'blue',
            username: 'bluemoon'
        } 
    }])

    const [member, setMember] = useState({
        color: randomColor(),
        username: props.currentUser,
    })



    /////////// ------------------------------------ Creating New Scaledrone Instance
    const drone = new window.Scaledrone("T6DViaUTalCL0het", {
        data: member.username
    });

    drone.on('open', error => {
        if (error) {
            return console.error(error);
    }

    const newMember = {...member.username}
    newMember.id = drone.clientId
    setMember(newMember)



    /////////// ------------------------------------ Connect to a Room
    const room = drone.subscribe("observable-room");
    });











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