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
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }} >
        <div className='login-form'>
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
            type='password'
          />
          <br/>
          <Button className="login-button" variant="contained" color="primary" type='submit' id='button'>Login</Button>
          <Link className="register-link" to="/register" id='register-link'>REGISTER</Link>
        </div>
      </form>
    </>
  )
}
