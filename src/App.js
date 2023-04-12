import './style.css';
import { useState } from 'react';

import marketpic from './assets/market.jpg'
import bitcoinpic from './assets/bitcoin.jpg'

import React from 'react';
import { NavLink, Route, Routes, BrowserRouter as Router} from 'react-router-dom';

import Login from './login';
import ViewMarket from './viewMarket';
import Transactions from './transactions';



const axios = require('axios');
let response = null;
new Promise(async (resolve, reject) => {
  try {
    response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': '54c38257-94ec-4c9c-86b6-465ad12fa5db',
      },
    });
  } catch(ex) {
    response = null;
    // error
    console.log(ex);
    reject(ex);
  }
  if (response) {
    // success
    const json = response.data;
    console.log(json);
    resolve(json);
  }
});





function App() { //the function 'App' has all the routes, which is what changes the page when you press a button

return(
  <Router>
  <Routes>
    <Route path='/' element={<Homepage />}/> {/*changes to home page*/}
    <Route path='/login' element={<Login />}/> {/*changes to login page*/}
    <Route path='/viewMarket' element={<ViewMarket />}/> {/*changes to view market page*/}
    <Route path="/transactions" element={<Transactions />} />
  </Routes>
</Router>)

  
}

function Homepage() {


  const [menuWidth, setMenuWidth] = useState(0)

  return (
      <>
  <p></p>
  <div className="container">
    <div className="nav-wrapper">
      <div className="left-side">
        <div className="nav-link-wrapper active-nav-link">
          <a href="index.html">Encrypto</a>
        </div>
        <div id="menus" className="test-overlay" style={{width: menuWidth}}>
          <a
            href="javascript:void(0)"
            className="test-close"
            onClick={() => {setMenuWidth(0)}}
          >
            ×
          </a>
          
        </div>
        <div className="menu-container" onClick={() => {setMenuWidth(100)}}>
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
            <a href="index.html">Home</a>
            <div className="sub-menu">
              <div className="col6">
                <a href="index.html">
                  <h5>Page Link ?</h5>
                </a>
                <h5>
                  <a href="index.html">
                    <h5>Page Link ?</h5>
                  </a>
                </h5>
                <h5>
                  <a href="index.html">
                    <h5>Page Link ?</h5>
                  </a>
                </h5>
                <h5></h5>
              </div>
              <div className="col6">
                <a href="index.html">
                  <h5>Page Link ?</h5>
                </a>
                
              
                <h5></h5>
              </div>
            </div>
          </li>
          <li>
            <a href="index.html">About</a>
            <div className="sub-menu">
              <div className="col3">
                <h4>TODO</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Maxime nihil atque rem minima optio debitis ratione. Ipsa,
                  dolorum nobis iste veritatis vel eos iusto quas aliquam,
                  beatae maiores porro repudiandae!
                </p>
              </div>
            </div>
          </li>
          
          <li>
            <a href="index.html">LINKS</a>
            <div className="sub-menu">
              <div className="col3">
                <h4>TODO</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore quidem delectus temporibus quaerat ullam in beatae,
                  soluta illum alias! Quod hic dolor maiores et! Modi
                  accusantium eum reprehenderit sequi laudantium.
                </p>
              </div>
            </div>
          </li>

          <li><NavLink exact activeClassName="current" to='/viewMarket'>Market</NavLink></li> {/*Create the market button*/}
          <li><NavLink exact activeClassName="current" to='/login'>Login</NavLink></li> {/*Creates the login button */}
          

          <li className="register">
            <a href="#">Sign up</a>
          </li>
        </ul>
      </div>
      <div className="paralax-effect">
        <section className="paralax">
          <div className="paralax-inner">
            <h1>Welcome To Encrypto</h1>
          </div>
        </section>
      </div>
      <div className="categories-wrapper">

        <div className="category-wrapper">

          <div className="category-img">

              <img src={bitcoinpic} alt="image" />
          </div>
        </div>

        <div className="category-wrapper">

          <div className="category-img">
            
              <img src={marketpic} alt="image" />
          
          </div>
        </div>
      </div>
    </div>
    <p />
  </div>
</>



    
  );
}



export default App;


