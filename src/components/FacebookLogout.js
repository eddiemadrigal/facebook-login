import React from 'react';

const FacebookLogout = () => {

  const logout = e => {
    e.preventDefault();
    window.FB.logout();
  }

  return (
    <button onClick={ logout }>Logout</button>
  )
}

export default FacebookLogout;