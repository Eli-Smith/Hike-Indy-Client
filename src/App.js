import React, { useState } from 'react'; // Importing react allowing us to Create a new react app instance
import './App.css' // Linking our css file

import Navbar from './Components/Navbar/Navbar'; // Importing our Navbar component
import Auth from './Components/Auth/Auth'; // Importing our Auth component
import Splash from './Components/Splash/Splash'; // Importing our Splash component

function App() { // Declaring our App Component
  const [sessionToken, setSessionToken] = useState(undefined) // Defining our useState to store our jwt and pass it throughout the app

  const AuthViews = () =>{ // Creating a function to decide what should be rendered to the screen
    return sessionToken !== undefined ? <Splash token={sessionToken}/> : <Auth token={sessionToken} setSession={setSessionToken}/> // Using a ternary to determine whether or not our jwt is undefined or not. If it is not undefiniend, show our splash page and pass it our token as a prop. If it is undefined, display our Auth page and pass it our setSessionToken callback function as a prop
  }
  return (
    <div className="App">
      <div className="mainAppDiv">
        <Navbar setSession={setSessionToken}/> {/*Calling our navbar Component*/}
        {AuthViews()} {/*Invoking our our AuthViews function to determine what will be displayed to the screen*/}
      </div>
    </div>
  );
}

export default App; // Exporting the App module
