import React from "react";
import './style.css';
import { NavLink, Route, Routes, BrowserRouter as Router} from 'react-router-dom';

import Homepage from './App.js'

function App() {
  <Router>
    <Routes>
    <Route path='/' element={<Homepage />}/> {/*changes to home page*/}
    </Routes>
  </Router>
}


const Transactions=() => {
  return (

<>
  <meta charSet="utf-8" />
  <title>Encrypto - Buy &amp; sell crypto</title>
  <link rel="stylesheet" href="style.css" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
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
          <div className="test-overlay-content">
            <a href="index.html">HOME</a>
            <a href="index.html">LINKS</a>
            <a href="index.html">LINKS</a>
            <a href="index.html">LINKS</a>
            <a href="index.html">LINKS</a>
          </div>
        </div>
        <div className="menu-container" onclick="openMenu(this)">
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
        </div>
      </div>
    </div>
    <div className="wrapper">
      <div className="mega-menu">
        <ul>
          <li>
            <NavLink exact activeClassName="current" to='/'>Home</NavLink> {/*Creates the login button */}
          </li>
          
        
          
        </ul>
      </div>
      <div className="padding-layer">
        <div className="user-dashboard">
          <div className="profile-picture">
            <img src="path/to/profile-picture.jpg" alt="Profile Picture" />
          </div>
          <div className="username">
            <h2>John Doe</h2>
          </div>
          <div className="notifications">
            <i className="fas fa-bell" />
            <span className="badge">notif bell here</span>
          </div>
          <div className="balance">
            <h3>Balance:</h3>
            <p>$1000.00</p>
          </div>
        </div>
        <div className="user-transaction-buttons">
          <div className="transaction-button buy-button">
            <span>Buy</span>
          </div>
          <div className="transaction-button">
            <span>Send</span>
          </div>
          <div className="transaction-button">
            <span>Receive</span>
          </div>
        </div>
        <div className="view-container">
          <div className="crypto-view">
            <h2 className="crypto-title">View Crypto</h2>
            <div className="crypto-box">
              <p>Shows crypto when button pressed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
  )
}
export default Transactions
