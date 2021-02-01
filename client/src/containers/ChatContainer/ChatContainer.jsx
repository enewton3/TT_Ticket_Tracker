import { useState } from "react";

export default function ChatContainer() {

  const [messages, setMessages] = useState({
    text  : 'testing chat :)',
    });

    return(
        <Messages messages={messages}/>
    )

}