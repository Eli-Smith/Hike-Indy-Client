import React, { useState } from 'react';
import './App.css'

import Navbar from './Components/Navbar/Navbar';
import Auth from './Components/Auth/Auth';
import Splash from './Components/Splash/Splash';

function App() {
  const [sessionToken, setSessionToken] = useState(undefined)

  const AuthViews = () =>{
    return sessionToken !== undefined ? <Splash token={sessionToken}/> : <Auth setSession={setSessionToken}/>
  }
  return (
    <div className="App">
      <div className="mainDiv">
        <Navbar setSession={setSessionToken}/>
        {AuthViews()}
      </div>
    </div>
  );
}

export default App;
