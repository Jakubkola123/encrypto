import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <>
  {/* Hello world */}
  <div className="awesome" style={{ border: "1px solid red" }}>
    <label htmlFor="name">Enter your name: </label>
    <input type="text" id="name" />
  </div>
  <p></p>
  <div className="container">
    <div className="nav-wrapper">
      <div className="left-side">
        <div className="nav-link-wrapper active-nav-link">
          <a href="index.html">Encrypto</a>
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
            <a href="index.html">HOME</a>
          </li>
          <li>
            <a href="index.html">LINKS</a>
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
                <h5 />
                <a href="index.html">
                  <h5>Page Link ?</h5>
                </a>
                <h5>
                  <a href="index.html">
                    <h5>Page Link ?</h5>
                  </a>
                </h5>
                <h5></h5>
              </div>
            </div>
          </li>
          <li>
            <a href="index.html">LINKS</a>
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sunt, aliquid architecto. Repellat aliquid placeat corrupti
                  officia. Sunt quae dolores aliquid neque vitae debitis
                  suscipit ipsum illo quaerat? Quod, quos reprehenderit!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum eius at repudiandae dolorum voluptatibus quas
                  excepturi laborum et. Omnis incidunt cum nam porro neque
                  praesentium et quod minima corrupti odio!
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
          <li className="login">
            <a href="#">Log in</a>
          </li>
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
            <a href="#">
              <img src="images/bitcoin.jpg" alt="image" />
            </a>
            <div className="centered">Use case 2?</div>
            <div className="go-now">Get Started</div>
          </div>
        </div>
        <div className="category-wrapper">
          <div className="category-img">
            <a href="#">
              <img src="images/market.jpg" alt="image" />
            </a>
            <div className="centered">Use case 3?</div>
            <div className="go-now">Get Started</div>
          </div>
        </div>
      </div>
    </div>
    <p />
  </div>
</>



    </div>
  );
}

export default App;
