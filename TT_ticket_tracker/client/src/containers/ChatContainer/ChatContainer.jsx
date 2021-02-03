import { useState } from "react";
import Messages from '../../components/Messages/Messages'
import Input from '../../components/Input/Input'
import Button from '@material-ui/core/Button';
import './ChatContainer.css'
import { createThread } from "../../services/Chat";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { createTicket } from "../../services/Tickets";


export default function ChatContainer(props) {

    const history = useHistory();

    /////////// ------------------------------------ Setting States
    const [messages, setMessages] = useState([{
        text: '', 
        member: {
            color: '',
            username: ''
        } 
    }])

    const [member, setMember] = useState({
        color: randomColor(),
        username: props.currentUser,
    })

    const [form, setForm] = useState({
        title: '',
        description: '',
        status: true,
        user_id: props.currentUser,
    });

    /////////// ------------------------------------ Creating New Scaledrone Instance
    const [drone, setDrone] = useState(
        new window.Scaledrone("T6DViaUTalCL0het", {
            data: member.username
        })
    )

    /////////// ------------------------------------ Opening Instance
    drone.on('open', error => {
        if (error) {
            return console.error(error);
        }
        
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
            // console.log(newMessages)
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

    const handleChange = (event) => {
        const {name, value} = event.target
        setForm({
          ...form,
          [name]:value,
        });
    };

    console.log(messages)
    const handleSubmit = async (e) => {
        e.preventDefault()
        let ticket = await createTicket({...form, user_id: props.currentUser.id})          // submit to Ticket table -- have to submit tix 1st to get id

        const thread = {
            data: JSON.stringify(messages),
            ticket_id: ticket.id
        }

        await createThread(thread)        // submit to Messages table

        history.push(`/tickets`)
    }

    const { title, description } = form;

    return(
        <>
            <Messages messages={messages} currentUser={props.currentUser} currentMember={member}/>
            <Input onSendMessage={onSendMessage} />
            <form onSubmit={handleSubmit}>
                <TextField
                    required
                    onChange={handleChange}
                    name="title"
                    value={title}   
                    className="textfield"
                    label="Title"
                    variant="outlined"
                    type="text"
                />
                <TextField
                    required
                    onChange={handleChange}
                    name="description"
                    value={description}
                    className="textfield"
                    label="Description"
                    variant="outlined"
                    type="text"
                />
                <Button variant="contained" color="primary" type='submit' id='button'>Save</Button>
            </form>
        </>
    )
}