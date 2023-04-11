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


const Login=() => {
  return (
<div className="body">
  <>
  <title>Encrypto - Buy &amp; sell crypto</title>
  
  
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
          <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li> {/*Creates the login button */}
          </li>
          
        </ul>
      </div>
    </div>
    <div className="body-about">
      <section>
        <div className="content-about">
          <h2>Login To Encrypto</h2>
          <span></span>
          <p>
            //encrypto info here// ... Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eos tempora repudiandae quidem quas architecto
            dignissimos vitae rerum, animi vero a deserunt optio fugiat
            recusandae temporibus molestias enim qui voluptates reiciendis.
          </p>
          
        </div>
        <div className="loginwrapper">
          <form action="#">
            <div className="field">
              <input type="text" required="" />
              <label>Username</label>
            </div>
            <div className="field">
              <input type="password" required="" />
              <label>Password</label>
            </div>
            <div className="content">
              <div className="pass-link">
                <a href="#">Forgot password?</a>
              </div>
            </div>
            <div className="content">
              <div className="pass-link">
                <a href="sign-up.html">Not a member?</a>
              </div>
            </div>
            <div className="field">
              <input type="submit" defaultValue="Login" />
            </div>
            
          </form>
        </div>
      </section>
    </div>
  </div>
  
</>
</div>
)

  
}
 
export default Login
  

{/* <script>
    
    function animateMenu(x) {
  x.classList.toggle("change");
}
    function openMenu(){
        document.getElementById("menus").style.width="100%";
      }
    function closeMenu(){
        document.getElementById("menus").style.width="0%";
      }

    const x = document.querySelectorAll('.portfolio-item-wrapper')

    x.forEach(portfolioItem => {
        portfolioItem.addEventListener('mouseover', () => {
            // console.log(portfolioItem);
            portfolioItem.childNodes[1].classList.add('img-darken');

        })
        portfolioItem.addEventListener('mouseout', () => {
            // console.log(portfolioItem);
            portfolioItem.childNodes[1].classList.remove('img-darken');

        })
    })

</script> */}
