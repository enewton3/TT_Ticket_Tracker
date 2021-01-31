import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

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
    <div className="auth-container" >
      <h2>login</h2>
      <hr />
      <form onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }} >
        <label>
          Username:
            <input
            name="username"
            type="text"
            value={username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
            <input
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <hr />
        <Button variant="contained" color="primary">Login</Button>
        <Link to="/register">Register</Link>
      </form>
    </div>
  )
}
