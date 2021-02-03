import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import './Header.css'

export default function Header(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className='headerContainer'>
      <div className='logo'>
        <Link to='/'><img src="https://i.imgur.com/FoWAAmg.png" alt="tt_logo"/></Link>
      </div>
      <div className='right-nav'>
        {currentUser ? (
            <>
              <div className='inner-nav>'>
                <p>Welcome {currentUser.username}!</p>
                <Link className="tickets-link" to='/tickets'>Tickets</Link>
                <Link className="chat-link" to='/chat'>Chat</Link>
                <Button variant="contained" color="primary" type='submit' onClick={handleLogout}>Logout</Button>
              </div>
            </>
          ) : (
            <Link className="login-register-link" to='/login'>LOGIN / REGISTER</Link>
          )}
        </div>
    </div>
  )
}