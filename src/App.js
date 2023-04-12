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

  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowPopup(true);
  };


  const [menuWidth, setMenuWidth] = useState(0)
  const [isOpen, setIsOpen] = useState(false);

  return (
      <>
  <p></p>
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
        
          <li><NavLink exact activeClassName="current" to='/login'>Log in</NavLink></li> {/*Creates the login button */}
          <li><NavLink exact activeClassName="current" to='/transactions'>Transactions</NavLink></li> {/*Creates the transactions button */}
          <li><NavLink exact activeClassName="current" to='/viewMarket'>View Market</NavLink></li> {/*Create the market button*/}

        </ul>
      </div>

      <div className="center">
        <button onClick={() => setIsOpen(true)}>
          Contact Us
        </button>
   
        {isOpen && (
         <div>
          <div>
            <form onSubmit={handleSubmit}>
            <label for="name">Name: </label>
            <input type="text" id="name" name="name"></input><br></br>
            <label for="email">Email: </label>
            <input type="text" id="email" name="email"></input><br></br>
            <label for="phone">Phone Number: </label>
            <input type="text" id="phone" name="phone"></input><br></br>
            <label for="query">What is your query? </label>
            <input type="text" id="query" name="query"></input><br></br>
            <button type="submit" id = "submit">Submit</button>
            </form>
            {showPopup && (
        <div className="popup">
          <h2>Success!</h2>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
          </div>
          <button onClick={() => setIsOpen(false)}>
            Close
          </button>
         </div>
        )}
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
              <NavLink exact activeClassName="current" to='/'>
                <span className="market-caption">View News</span>
              </NavLink>
          </div>
          
        </div>

        <div className="category-wrapper">

        <div className="category-img">
            <img src={marketpic} alt="image" />
            <li>
              <NavLink exact activeClassName="current" to='/viewMarket'>
                <span className="market-caption">View Market</span>
              </NavLink>
            </li>
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


