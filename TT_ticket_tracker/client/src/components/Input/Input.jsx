import { useState } from "react";

export default function Input(props){

    const [text, setText] = useState({
        text : '',
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
        props.onSendMessage(text);
        setText({text: ''});
    }


    return (
        <div className="Input">
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              value={text}
              type="text"
              placeholder="Enter your message and press ENTER"
              autofocus="true"
            />
            <button>Send</button>
          </form>
        </div>
      );
}
