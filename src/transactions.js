import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './style.css';
import { NavLink, Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Homepage from './App.js';

function App() {
  <Router>
    <Routes>
    <Route path='/' element={<Homepage />}/> {/*changes to home page*/}
    </Routes>
  </Router>
}


const Transactions=() => {

  const [balance, setBalance] = useState(1000);
  const [showForm, setShowForm] = useState(false);
  const [amount, setAmount] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState(null);

  const [cryptoHoldings, setCryptoHoldings] = useState({ BTC: 0, ETH: 0, LTC: 0 });
  const [cryptoPrices, setCryptoPrices] = useState({});
  const [historicalData, setHistoricalData] = useState([]);

  const fetchCryptoPrices = async () => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Clitecoin&vs_currencies=usd');
      setCryptoPrices(response.data);
    } catch (error) {
      console.error('Error fetching crypto prices:', error);
    }
  };

  const fetchHistoricalData = async (cryptoId) => {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart?vs_currency=usd&days=30&interval=daily`);
      const formattedData = response.data.prices.map((entry) => ({ timestamp: entry[0], price: entry[1] }));
      setHistoricalData(formattedData);
    } catch (error) {
      console.error('Error fetching historical data:', error);
    }
  };

  useEffect(() => {
    fetchCryptoPrices();
  }, []);

  const handleCryptoSelection = (cryptoId) => {
    fetchHistoricalData(cryptoId);
  };
  const handleBuyClick = (crypto) => {
    setSelectedCrypto(crypto);
    setShowForm(true);
  };

  const handleSellClick = (crypto, cryptoId) => {
    setSelectedCrypto(crypto);
    // Implement the selling functionality
  };  

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
                <div className="user-transaction-buttons">
                <div className="transaction-button buy-button" onClick={() => handleBuyClick("BTC", "bitcoin")}>
                  <span>Buy BTC  ${cryptoPrices.bitcoin?.usd || "..."}</span>
                </div>
                <div className="transaction-button sell-button" onClick={() => handleSellClick("BTC", "bitcoin")}>
                  <span>Sell BTC</span>
                </div>
                <div className="transaction-button buy-button" onClick={() => handleBuyClick("ETH", "ethereum")}>
                  <span>Buy ETH  ${cryptoPrices.ethereum?.usd || "..."}</span>
                </div>
                <div className="transaction-button sell-button" onClick={() => handleSellClick("ETH", "ethereum")}>
                  <span>Sell ETH</span>
                </div>
                <div className="transaction-button buy-button" onClick={() => handleBuyClick("LTC", "litecoin")}>
                  <span>Buy LTC  ${cryptoPrices.litecoin?.usd || "..."}</span>
                </div>
                <div className="transaction-button sell-button" onClick={() => handleSellClick("LTC", "litecoin")}>
                  <span>Sell LTC</span>
                </div>
              </div>                  
              <select onChange={(e) => handleCryptoSelection(e.target.value)}>
                <option value="">Select Crypto</option>
                <option value="bitcoin">Bitcoin</option>
                <option value="ethereum">Ethereum</option>
                <option value="litecoin">Litecoin</option>
              </select>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={historicalData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="timestamp" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>


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
