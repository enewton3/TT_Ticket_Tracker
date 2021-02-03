import { useState } from "react";
import '../../containers/ChatContainer/ChatContainer.css'

export default function Input(props){

    const [text, setText] = useState({
        text:''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setText(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setText({text:''});
        props.onSendMessage(text.text);
    }

    return (
        <div className="Input">
          <form className="input-form" onSubmit={handleSubmit}>
            <input
              name='text'
              onChange={handleChange}
              value={text.text}
              type="text"
              placeholder="Enter your message and press ENTER"
              autoFocus={true}
            />
            <button>Send</button>
          </form>
        </div>
      );
}
