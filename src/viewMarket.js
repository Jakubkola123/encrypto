import React, { useState, useEffect } from 'react';
import './style.css';
import { NavLink, Route, Routes, BrowserRouter as Router} from 'react-router-dom';

import News from './news';

const CryptoTable = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(response => response.json())
      .then(data => setCryptoData(data))
      .catch(error => console.log(error));
  }, []);

  return (

    
      <>
      <div className="container">
      <div className="nav-wrapper">
        <div className="left-side">
          <div className="nav-link-wrapper active-nav-link">
          <a>Encrypto</a>
      </div>
      </div>
      </div>

      <div className="mega-menu">
      <ul>
        <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li> {/*Creates the login button */}
        <li><NavLink exact activeClassName="current" to='/login'>Log in</NavLink></li> {/*Creates the login button */}
        <li><NavLink exact activeClassName="current" to='/transactions'>Transactions</NavLink></li> {/*Creates the transactions button */}
        <li><NavLink exact activeClassName="current" to='/news'>News</NavLink></li> {/*Creates the transactions button */}
      </ul>

      </div>
    </div><div className="market">

        <br></br>

        <div className="center">
        <h2>Crypto Market</h2>
        </div>

        <table>

          <thead>

            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price (USD)</th>
              <th>24h Change</th>
              <th>Market Cap</th>
            </tr>

          </thead>

          <tbody>

            {cryptoData.map(crypto => (

              <tr key={crypto.id}>
                <td>{crypto.name}</td>
                <td>{crypto.symbol.toUpperCase()}</td>
                <td>{crypto.current_price}</td>
                <td>{crypto.price_change_percentage_24h}%</td>
                <td>{crypto.market_cap}</td>
              </tr>

            ))}

          </tbody>

        </table>

      </div></>
  );
};

export default CryptoTable;
