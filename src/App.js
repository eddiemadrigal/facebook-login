import React, {useState} from 'react';
import Facebook from './components/Facebook';
import FacebookLogout from './components/FacebookLogout';
import './App.css';

function App() {

  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [userID, setUserID] = useState('');
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [picture, setPicture] = useState('');

  return (
    <div className="App">
        <Facebook isLoggedIn={isLoggedIn} userID={userID} name={name} email={email} picture={picture} />
        <FacebookLogout />
    </div>
  );
}

export default App;
