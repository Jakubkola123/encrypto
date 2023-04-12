import './style.css';
import { useState } from 'react';

import marketpic from './assets/market.jpg'
import bitcoinpic from './assets/bitcoin.jpg'

import React from 'react';
import { NavLink, Route, Routes, BrowserRouter as Router} from 'react-router-dom';

import Login from './login';
import ViewMarket from './viewMarket';
import Transactions from './transactions';

import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/database'; // Import any Firebase services you need


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBr7qI8ttV9MwU7tuRI6ipSB5sheibvb7I",

  authDomain: "encrypto-db.firebaseapp.com",

  projectId: "encrypto-db",

  storageBucket: "encrypto-db.appspot.com",

  messagingSenderId: "638486543281",

  appId: "1:638486543281:web:59c32c5d226dd3390ddb90",

  measurementId: "G-F27K7VBZF4"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);

const databaseRef = firebase.database().ref('queries');

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
    <Route path='/transactions'element={<Transactions />}/> {/*changes to transactions page*/}
  </Routes>
</Router>)

  
}

function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from reloading the page

  // Get a reference to the Firebase Realtime Database
  const databaseRef = firebase.database().ref();

  // Extract the values from the form inputs
  const name = event.target.elements.name.value;
  const email = event.target.elements.email.value;
  const phone = event.target.elements.phone.value;
  const query = event.target.elements.query.value;

  // Add the data to the Firebase Realtime Database
  databaseRef.push({
    name,
    email,
    phone,
    query,
  });
}




function Homepage() {


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

      <div className="popup">
        <button onClick={() => setIsOpen(true)}>
          Contact Us
        </button>
   
        {isOpen && (
         <div>
          <div>
            <form>
            <label for="name">Name: </label>
            <input type="text" id="name" name="name"></input><br></br>
            <label for="email">Email: </label>
            <input type="text" id="email" name="email"></input><br></br>
            <label for="phone">Phone Number: </label>
            <input type="text" id="phone" name="phone"></input><br></br>
            <label for="query">What is your query? </label>
            <input type="text" id="query" name="query"></input><br></br>
            <button type="submit">Submit</button>
            </form>
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


