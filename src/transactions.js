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
  const [showBuySellForm, setShowBuySellForm] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [buySellAmount, setBuySellAmount] = useState(0);


  const [isWithdrawFormVisible, setIsWithdrawFormVisible] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [showError, setShowError] = useState(false);



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

  useEffect(() => {
    let newBalance = 1000;
    const newCryptoHoldings = { BTC: 0, ETH: 0, LTC: 0 };
  
    transactions.forEach((transaction) => {
      console.log(transaction);
      if (transaction.type === "buy") {
        newBalance -= transaction.transactionAmount;
        newCryptoHoldings[transaction.crypto] += transaction.amount;
      } else if (transaction.type === "sell") {
        newBalance += transaction.transactionAmount;
        newCryptoHoldings[transaction.crypto] -= transaction.amount;
      }
    });
  
    setBalance(newBalance);
    setCryptoHoldings(newCryptoHoldings);
  }, [transactions]);
  
  
  

  const handleCryptoSelection = (cryptoId) => {
    fetchHistoricalData(cryptoId);
  };


  const handleBuyClick = (e) => {
    e.preventDefault();
    const crypto = selectedCrypto;
    const cryptoId = selectedCrypto.toLowerCase();
    const cryptoPrice = cryptoPrices[cryptoId]?.usd;
    console.log("Buy clicked", crypto, cryptoId, cryptoPrice);
    if (cryptoPrice) {
      const transactionAmount = buySellAmount * cryptoPrice;
      console.log("Transaction amount", transactionAmount, "Balance", balance);
      if (transactionAmount <= balance) {
        setTransactions((prevTransactions) => [
          ...prevTransactions,
          {
            type: "buy",
            crypto,
            amount: buySellAmount,
            transactionAmount,
          },
        ]);
      }
    }
    setShowBuySellForm(false);
  };
  
  const handleSell = (e) => {
    e.preventDefault();
    const crypto = selectedCrypto;
    const cryptoId = selectedCrypto.toLowerCase();
    const cryptoPrice = cryptoPrices[cryptoId]?.usd;
    console.log("Sell clicked", crypto, cryptoId, cryptoPrice);
    if (cryptoPrice) {
      const transactionAmount = buySellAmount * cryptoPrice;
      if (buySellAmount <= cryptoHoldings[crypto]) {
        setTransactions((prevTransactions) => [
          ...prevTransactions,
          {
            type: "sell",
            crypto,
            amount: buySellAmount,
            transactionAmount,
          },
        ]);
      }
    }
    setShowBuySellForm(false);
  };
  

    
  const handleSubmitBuySell = (e) => {
    e.preventDefault();
    if (selectedCrypto) {
      if (e.nativeEvent.submitter.textContent.startsWith("Buy")) {
        handleBuyClick(e);
      } else if (e.nativeEvent.submitter.textContent.startsWith("Sell")) {
        handleSell(e);
      }
      
    }
  };

  const handleOpenBuySellForm = (crypto) => {
    setSelectedCrypto(crypto);
    setShowBuySellForm(true);
  };


  
  const handleWithdrawClick = () => {
    setShowForm(true);
    setIsWithdrawFormVisible(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isWithdrawFormVisible && withdrawAmount > balance) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
      return;
    }
    const newBalance = balance + amount - withdrawAmount;
    if (newBalance < 0) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
      return;
    }
    setBalance(newBalance);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
    setShowForm(false); // set showForm state to false to make the form disappear
  };

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
              <div className="username">
                <h2>testuser</h2>
              </div>
              <div className="balance">
                <h3>Balance:</h3>
                <p>${balance.toFixed(2)}</p>
              </div>
            </div>           
            <div className="user-transaction-buttons">
              <div className="transaction-button buy-button" onClick={() => setShowForm(true)}>
                <span>Add or withdraw funds</span>
              </div>
            </div>
            <div className="view-container">
              <div className="crypto-view">
                <h2 className="crypto-title">View Crypto</h2>
                <div className="crypto-box">
                <div className="user-transaction-buttons">
                  <div className="transaction-button buy-button" onClick={() => handleOpenBuySellForm("BTC")}>
                    <span> BTC  ${cryptoPrices.bitcoin?.usd || "..."}</span>
                  </div>

                  <div className="transaction-button buy-button" onClick={() => handleOpenBuySellForm("ETH")}>
                    <span>ETH  ${cryptoPrices.ethereum?.usd || "..."}</span>
                  </div>

                  <div className="transaction-button buy-button" onClick={() => handleOpenBuySellForm("LTC")}>
                    <span> LTC  ${cryptoPrices.litecoin?.usd || "..."}</span>
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
            Add Funds:
            <input
              type="text"
              pattern="[0-9]+"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </label>
          <label>
  Withdraw Amount:
  <input
    type="text"
    pattern="[0-9]+"
    value={withdrawAmount}
    onChange={(e) => setWithdrawAmount(Number(e.target.value))}
  />
</label>
          {isWithdrawFormVisible ? (
            <>
            </>
          ) : (
            <>
              <label>
                Card Number:
                <input type="tel" pattern="[0-9]{16}" maxLength="16" required />
              </label>
              <label>
                Billing Address:
                <input type="text" pattern="[a-zA-Z0-9\s]+" required />
              </label>
            </>
          )}
          <button type="submit">Submit</button>
        </form>
      )}
      
      {showBuySellForm && (
        <form>
          <h3>{selectedCrypto} transaction</h3>
          <label>
            Amount:
            <input
              type="text"
              pattern="[0-9]+"
              onChange={(e) => setBuySellAmount(Number(e.target.value))}
            />
          </label>
          <button type="submit">Buy {selectedCrypto}</button>
          <button type="submit">Sell {selectedCrypto}</button>
        </form>
      )}


      {showNotification && (
        <div className="success-notification">
          <h2>Success</h2>
          <p>
            Transaction has gone through
          </p>
        </div>
      )}
    </>
  )
}
export default Transactions