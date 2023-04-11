import './style.css';
import { useState } from 'react';

import marketpic from './assets/market.jpg'
import bitcoinpic from './assets/bitcoin.jpg'

import React from 'react';
import { NavLink, Route, Routes, BrowserRouter as Router} from 'react-router-dom';

import Login from './login';
import ViewMarket from './viewMarket';
import Transactions from './transactions';



function App() { //the function 'App' has all the routes, which is what changes the page when you press a button

return(
  <Router>
  <Routes>
    <Route path='/' element={<Homepage />}/> {/*changes to home page*/}
    <Route path='/login' element={<Login />}/> {/*changes to login page*/}
    <Route path='/viewMarket' element={<ViewMarket />}/> {/*changes to view market page*/}
    <Route path='/transactions'element={<Transactions />}/> {/*changes to transactions page*/}
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
          <a>Encrypto</a>
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
        
          <li><NavLink exact activeClassName="current" to='/login'>Log in</NavLink></li> {/*Creates the login button */}
          <li><NavLink exact activeClassName="current" to='/transactions'>Transactions</NavLink></li> {/*Creates the transactions button */}
          <li><NavLink exact activeClassName="current" to='/viewMarket'>View Market</NavLink></li> {/*Create the market button*/}
           
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


