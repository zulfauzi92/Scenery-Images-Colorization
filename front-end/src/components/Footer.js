import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div class="container margin_60_35">
                <div class="row">
                    <div class="col-lg-5 col-md-12 p-r-5">
                        {/* <p><img src="assets/img/otakkananlogo.png" width="160" height="50" alt=""/></p> */}
                        <p></p>
                        <div class="follow_us">
                            <ul>
                                <li>Follow us</li>
                                <li><a href="https://www.facebook.com/zul.oktaviansyah" target="_blank"><i class="ti-facebook"></i></a></li>
                                <li><a href="https://twitter.com/zaratras92" target="_blank"><i class="ti-twitter-alt"></i></a></li>
                                <li><a href="https://instagram.com/zul.fauzi92" target="_blank"><i class="ti-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 ml-lg-auto">
                        {/* <h5>Useful links</h5>
                        <ul class="links">
                            <li><Link to="/about">About</Link></li>
                            <li><a href="/login">Login</a></li>
                            <li><a href="/register">Register</a></li>
                        </ul> */}
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5>Contact with Us</h5>
                        <ul class="contacts">
                            <li><a href="tel://6289675946552"><i class="ti-mobile"></i> + 62 89 67 59 46552</a></li>
                            <li><a href="mailto:zul.fauzi92@gmail.com"><i class="ti-email"></i> zul.fauzi92@gmail.com</a></li>
                        </ul>
                        
                    </div>
                </div>
                
                <hr></hr>
                <div class="row">
                    <div class="col-lg-6">
                        
                    </div>
                    <div class="col-lg-6">
                        <ul id="additional_links">
                            {/* <li><a href="#0">Terms and conditions</a></li>
                            <li><a href="#0">Privacy</a></li> */}
                            <li><span>© 2022 Zul Fauzi Oktaviansyah</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
