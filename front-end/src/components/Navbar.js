import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "./assets/js/main.js";
    script.async = true;
    document.body.appendChild(script);  
  return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <>
      <header class="header menu_fixed">
            {/* <div id="preloader"><div data-loader="circle-side"></div></div> */}
            <div id="logo">
            <Link to="/">
                    {/* <img src="assets/img/logo_size.jpg" width="160" height="50" alt="" class="logo_normal"/> */}
                    {/* <img src="assets/img/logo_size.jpg" width="160" height="50" alt="" class="logo_sticky"/>  */}
                    
            </Link>
            </div>
        
            <a href="#menu" class="btn_mobile">
                <div class="hamburger hamburger--spin" id="hamburger">
                    <div class="hamburger-box">
                        <div class="hamburger-inner"></div>
                    </div>
                </div>
            </a>
            <nav id="menu" class="main-menu" >
                <ul>
                    <li><span><Link to="/">Home</Link></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                    {/* <li><span><Link to="/roomlist">Room</Link></span></li>
                    <li><span><Link to="/about">About</Link></span></li>
                    <li><span><Link to="/login">Login</Link></span></li>
                    <li><span><Link to="/register">Register</Link></span></li> */}
                    
                </ul>
            </nav>
        </header>

      {/* <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            GRAHA OFFICE
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/roomlist'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Room
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to='/sig-in'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign In/Register
              </Link>
            </li>
          </ul>
        </div>
      </nav> */}

    </>
   );
} 
export default Navbar;
