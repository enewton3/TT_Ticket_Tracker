import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className='headerContainer'>
      <img src="https://i.imgur.com/b4gQGaM.png" alt="tt_logo"/>
      {currentUser ? (
          <>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <div className='login-register'><Link to='/login'>Login / Register</Link></div>
        )}
    </div>
  )
}