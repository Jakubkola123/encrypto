
import React, { useState } from "react";
import './style.css';
import { NavLink, Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Homepage from './App.js'

function App() {
  <Router>
    <Routes>
    <Route path='/' element={<Homepage />}/> {/*changes to home page*/}
    </Routes>
  </Router>
}


const Login=() => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:3001/login', { //3001 is the server.js port
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();    

    if (response.status === 200) {
      navigate('/transactions');
      setErrorMessage('');
    } else {
      alert('Invalid username or password');
      setUsername('');
      setPassword('');
      setErrorMessage(data.message);      
    }

  };

  return (
<div className="body">
  <>
  <title>Encrypto - Buy &amp; sell crypto</title>
  
  
  <div className="container">
    <div className="nav-wrapper">
      <div className="left-side">
        <div className="nav-link-wrapper active-nav-link">
          <a>Encrypto</a>
        </div>
        <div id="menus" className="test-overlay">
          <a
            href="javascript:void(0)"
            className="test-close"
            onclick="closeMenu()"
          >
            ×
          </a>
          </div>
      </div>
    </div>
    <div className="wrapper">
      <div className="mega-menu">
        <ul>
          <li>
          <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li> {/*Creates the login button */}
          </li>
          
        </ul>
      </div>
    </div>
    <div className="body-about">
      <section>
        <div className="content-about">
          <h2>Login To Encrypto</h2>
          <span></span>
          <p>
            Encrypto is a user-friendly crypto wallet that allows you to manage your digital assets with ease.
            With Encrypto, you can easily buy and sell crypto, view news, and view real-time market information. 
            Sign up today with Encrypto.
          </p>
          
        </div>
        <div className="loginwrapper">
          
          <form onSubmit={handleLogin}> 
          {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="field">
              
              <input type="text" required="" value={username} onChange={(e) => setUsername(e.target.value)}/>
              <label>Username</label>
            </div>
            <div className="field">
              
              <input type="password" required="" value={password} onChange={(e) => setPassword(e.target.value)} />
              <label>Password</label>
            </div>
            <div className="content">
              <div className="pass-link">
                <a href="sign-up.html">Not a member?</a>
              </div>
            </div>
            <div className="field">
              <input type="submit" defaultValue="Login" />
            </div>
            
          </form>
        </div>
      </section>
    </div>
  </div>
  
</>
</div>
)

  
}
 
export default Login
  