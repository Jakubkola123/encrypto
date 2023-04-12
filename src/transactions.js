import React, { useState } from "react";
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

  const [balance, setBalance] = useState(1000); // set initial balance to $1000
  const [showForm, setShowForm] = useState(false); // show/hide pop-up form
  const [amount, setAmount] = useState(0); // amount to be added to balance
  const [showNotification, setShowNotification] = useState(false); // show/hide notification

  const handleBuyClick = () => {
    setShowForm(true); // show pop-up form when Buy button is clicked
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setBalance(balance + amount); // update balance when form is submitted
    setShowForm(false); // hide pop-up form after submission
    setShowNotification(true); // show notification after submission

    setTimeout(() => {
      setShowNotification(false); // hide notification after 2 seconds
    }, 2000);
  }  

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
                <p>${balance.toFixed(2)}</p>
              </div>
            </div>
            <div className="user-transaction-buttons">
              <div className="transaction-button buy-button" onClick={handleBuyClick}>
                <span>ADD FUNDS</span>
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
  {showForm && (
  <form onSubmit={handleSubmit}>
    <label>
      Amount:
      <input type="text" pattern="[0-9]+" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
    </label>
    <label>
      Card Number:
      <input type="tel" pattern="[0-9]{16}" maxLength="16" required />
    </label>
    <label>
      Billing Address:
      <input type="text" pattern="[a-zA-Z0-9\s]+" required />
    </label>
    <button type="submit">Submit</button>
  </form>
)}
  {showNotification && (
  <div className="success-notification">
    <h2>Success</h2>
    <p>You've added ${amount.toFixed(2)} and your account balance is now ${balance.toFixed(2)}</p>
  </div>
)}
</>
  )
}
export default Transactions
