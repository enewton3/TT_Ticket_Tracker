import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import './Header.css'

export default function Header(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className='headerContainer'>
      <div className='logo'>
        <Link to='/home'><img src="https://i.imgur.com/FoWAAmg.png" alt="tt_logo"/></Link>
      </div>
      <div className='right-nav'>
        {currentUser ? (
            <>
              <div className='inner-nav>'>
                <p>Welcome {currentUser.username}!</p>
                <Link to='/tickets'>Tickets</Link>
                <Link to='/chat'>Chat</Link>
                <Button variant="contained" color="primary" type='submit' onClick={handleLogout}>Logout</Button>
              </div>
            </>
          ) : (
            <Link to='/login'>LOGIN / REGISTER</Link>
          )}
        </div>
    </div>
  )
}