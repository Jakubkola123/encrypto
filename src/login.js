import './style.css';


const Login=() => {
  return (
  <>
  <title>Encrypto - Buy &amp; sell crypto</title>
  <link rel="stylesheet" href="style.css" />
  
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
            <a href="login.html">Log in</a>
          </li>
          <li className="register">
            <a href="sign-up.html">Sign up</a>
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
          <ul className="links-about">
            <li>
              <a href="index.html">Home</a>
            </li>
            <div className="vertical-line-about" />
            <li>
              <a href="index.html">Link</a>
            </li>
            <div className="vertical-line-about" />
            <li>
              <a href="index.html">Link</a>
            </li>
          </ul>
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
            {/* <div class="signup-link">
                    <a href="#">Create an account</a>
                 </div> */}
          </form>
        </div>
      </section>
    </div>
  </div>
</>
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
