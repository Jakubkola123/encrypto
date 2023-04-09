import React, { useState, useEffect } from 'react';
import './style.css';

const CryptoTable = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(response => response.json())
      .then(data => setCryptoData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price</th>
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
  );
};

export default CryptoTable;
