import React, { useEffect } from 'react';
import { Link,  useHistory } from 'react-router-dom';
import { logout } from "../utils/auth";


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

  const history = useHistory();
  const onLogout = () => {
    logout();
    history.replace("/sign-in");
  };

  return (
    <>
      <header class="header menu_fixed">
            {/* <div id="preloader"><div data-loader="circle-side"></div></div> */}
            <div id="logo">
            <Link to="/ownersroom">
                  <img src="assets/img/otakkananlogo.png" width="160" height="50" alt="" class="logo_normal"/>
                  <img src="assets/img/otakkananlogo.png" width="160" height="50" alt="" class="logo_sticky"/> 
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
                    <li><span><Link to="/bookingapprove">Booking Approval</Link></span>
                      <ul>
                          <li><Link to="/approvedroom">Approved List</Link></li>
                          <li><Link to="/declinedroom">Declined List</Link></li>
                      </ul>
                    </li>
                    <li><span><Link>Owner</Link></span>
                        <ul>
                          <li><Link to="/ownersroom">My Office</Link></li>
                          <li><Link to="/createoffice">Create Office</Link></li>
                          <li><Link to="/ownersroom">My Profile</Link></li>
                          <li><Link to="/" onClick={onLogout}>Logout</Link></li>
                        </ul>
                    </li>
                    <li><span><Link to="/aboutowner">About</Link></span></li>
                    
                    
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
