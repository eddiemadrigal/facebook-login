import React from 'react';
import './FacebookLogout.css';

const FacebookLogout = ({
  isLoggedIn, 
  setIsLoggedIn}) => {

  const logout = e => {
    e.preventDefault();
    window.FB.logout();
    setIsLoggedIn(false);
  }

  return (
    <div>
      
        <button onClick={ logout } className={isLoggedIn ? 'showLogoutButton' : 'hideLogoutButton'}>Logout</button>
      
    </div>
    
  )
}

export default FacebookLogout;