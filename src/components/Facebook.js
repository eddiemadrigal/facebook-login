import React from 'react';
import FacebookLogin from 'react-facebook-login';

const Facebook = ({
  isLoggedIn,
  setIsLoggedIn,
  userID,
  setUserID,
  name,
  setName,
  email,
  setEmail,
  picture,
  setPicture }) => {

  let fbContent;

  const componentClicked = () => {
    console.log('clicked')
  }

  const responseFacebook = res => {
    console.log(res);
    setIsLoggedIn(true);
    setUserID(res.userID);
    setName(res.name);
    setEmail(res.email);
    setPicture(res.picture.data.url);
  }

  if (isLoggedIn) {
    fbContent = (
      <div style={{
        width: '400px',
        margin: '0 auto',
        padding: '20px'
      }}>
        <img src={picture} alt={name} />
        <h2>Welcome {name}</h2>
        <h3>Email: {email}</h3>
        <h4>User ID: {userID}</h4>
      </div>
    )
  } else {
    fbContent = (
      <FacebookLogin
        appId="[your_key_here]"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook} />
    )
  }

  return (
    <div>
      {fbContent}
    </div>
  )
}

export default Facebook;