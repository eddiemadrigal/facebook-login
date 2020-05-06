import React, {useState} from 'react';
import Facebook from './components/Facebook';
import FacebookLogout from './components/FacebookLogout';
import './App.css';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userID, setUserID] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [picture, setPicture] = useState('');

  return (
    <div className="App">
        <Facebook 
          isLoggedIn={isLoggedIn} 
          setIsLoggedIn = {setIsLoggedIn}
          userID={userID} 
          setUserID = {setUserID}
          name={name} 
          setName = {setName}
          email={email} 
          setEmail = {setEmail}
          picture={picture} 
          setPicture = {setPicture}
          />
        <FacebookLogout
          isLoggedIn = {isLoggedIn}
          setIsLoggedIn = {setIsLoggedIn}
        />
    </div>
  );
}

export default App;
