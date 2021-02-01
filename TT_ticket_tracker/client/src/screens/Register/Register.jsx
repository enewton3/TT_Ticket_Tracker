import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
// import './Register.css'

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })
  const { username, email, password } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="auth-container">
      {/* <h2>Register</h2> */}
      <hr />
      <form onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }} >
        <TextField
            name="username"
            label='Username'
            value={username}
            onChange={handleChange}
            variant='outlined'
          />
        <TextField
            name="email"
            label='Email'
            value={email}
            onChange={handleChange}
            variant='outlined'
          />
        <TextField
          name='password'
          label='Password'
          value={password}
          onChange={handleChange}
          variant='outlined'
        />
        <hr />
        <Button variant="contained" color="primary" type='submit'>Register</Button>
      </form>
    </div>
  )
}
