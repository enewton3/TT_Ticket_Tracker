import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import './Login.css'

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className='auth-container' >
      <hr />
      {/* <h2>Login</h2> */}
      <form onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }} >
        <TextField
          name='username'
          label='Username'
          value={username}
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
        <br/>
        <Button variant="contained" color="primary" type='submit' id='button'>Login</Button>
        <Link to="/register" id='register-link'>Register</Link>
      </form>
    </div>
  )
}
