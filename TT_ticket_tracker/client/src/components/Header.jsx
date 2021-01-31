import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className='headerContainer'>
      <div className='logo'>
        <img src="https://i.imgur.com/b4gQGaM.png" alt="tt_logo"/>
      </div>
      <div className='right-nav'>
        {currentUser ? (
            <>
              <p>{currentUser.username}</p>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <Link to='/login'>LOGIN / REGISTER</Link>
          )}
        </div>
    </div>
  )
}