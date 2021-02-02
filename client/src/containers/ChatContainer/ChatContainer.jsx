import { useEffect, useState } from "react";
import Messages from '../../components/Messages/Messages'
import Input from '../../components/Input/Input'
import './ChatContainer.css'



export default function ChatContainer(props) {



    /////////// ------------------------------------ Setting States
    const [messages, setMessages] = useState([{
        text: '', //"This is a test message!",
        member: {
            color: '', // color: 'blue',
            username: '' // username: 'bluemoon'
        } 
    }])

    const [member, setMember] = useState({
        color: randomColor(),
        username: props.currentUser,
    })

    /////////// ------------------------------------ Creating New Scaledrone Instance
    const [drone, setDrone] = useState(
        new window.Scaledrone("T6DViaUTalCL0het", {
            data: member.username
        })
    )

    

    /////////// ------------------------------------ 
    drone.on('open', error => {
        if (error) {
            return console.error(error);
        }
        
        // const newMember = {...member}
        // console.log(newMember)
        // newMember.id = drone.clientId
        setMember(prevState => ({
            ...prevState,
            id: drone.clientId
        }))
    });



    /////////// ------------------------------------ Connect to a Room
    let room = drone.subscribe("observable-room");






    /////////// ------------------------------------ Tracks when messages arrive
    room.on('data', (data, member) => {
        const newMessages = [...messages];
        newMessages.push({
            member,
            text: data});
            console.log(newMessages)
        setMessages(newMessages);
    });




    function randomColor() {
        return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
    }

    const onSendMessage = (message) => {
        drone.publish({
        room: "observable-room",
        message: message
        });
    }





    return(
        <>
            <Messages messages={messages} currentUser={props.currentUser} currentMember={member}/>
            <Input onSendMessage={onSendMessage} />
        </>
    )
}