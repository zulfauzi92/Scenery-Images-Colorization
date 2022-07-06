import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavbarUser';
import Footer from '../components/Footer';
import axios from 'axios';
import { GET_ROOMS, STORAGE_URL } from '../constants/urls';

function RoomListUser() {


    const [list, setRooms] = React.useState({rooms: []});
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        await axios
          .get(GET_ROOMS(), {
            headers: {},
          })
          .then((res) => {
            console.log(res.data);
            setRooms(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
        setIsLoading(false);
      };
      fetchData();
    }, []);


    return(
    <div>
    <div id="page">		
        <Navbar />
        <div>
            <section class="hero_in hotels">
                <div class="wrapper">
                    <div class="container">
                        <h1 class="fadeInUp"><span></span>Room list</h1>
                    </div>
                </div>
            </section>
            
            
            <div class="filters_listing sticky_horizontal">
                <div class="container">
                    <ul class="clearfix">
                        <li>
                            <div class="switch-field">
                                <input type="radio" id="all" name="listing_filter" value="all"/>
                                <label for="all">All</label>
                                <input type="radio" id="popular" name="listing_filter" value="popular"/>
                                <label for="popular">Popular</label>
                                <input type="radio" id="latest" name="listing_filter" value="latest"/>
                                <label for="latest">Latest</label>
                            </div>
                        </li>
                        <li>
                            <div class="layout_view">
                                <a href="hotels-grid-isotope.html"><i class="icon-th"></i></a>
                                <a href="#0" class="active"><i class="icon-th-list"></i></a>
                            </div>
                        </li>
                        <li>
                            <a class="btn_map" data-toggle="collapse" href="#collapseMap" aria-expanded="false" aria-controls="collapseMap" data-text-swap="Hide map" data-text-original="View on map">View on map</a>
                        </li>
                    </ul>
                </div>
                
            </div>
            
            
            <div class="collapse" id="collapseMap">
                <div id="map" class="map"></div>
            </div>
           
    
            <div class="container margin_60_35">
            {list.rooms.map(item => (
                    <div class="box_list">
                        <div class="row no-gutters">
                            <div class="col-lg-5">
                                <figure>

                                    <small>{item.name}</small>
                                    <Link to={{
                                        pathname: "/roomdetail",
                                        state: item.id // your data array of objects
                                    }}><img src={STORAGE_URL + item.filename} class="img-fluid" alt="" width="800" height="533"/><div class="read_more"><span>Read more</span></div></Link>

                                </figure>
                            </div>
                            <div class="col-lg-7">
                                <div class="wrapper">
                                    <a href="#0" class="wish_bt"></a>
                                    &nbsp;

                                    <h3><Link to={{
                                        pathname: "/roomdetail",
                                        state: item.id // your data array of objects
                                    }}>
                                        {item.name}</Link></h3>
                                    <p>{item.description}</p>
                                    {/* <span class="price">From <strong>$54</strong> /per hour</span> */}

                                </div>
                                <ul>
                                    <li>{item.address}</li>
                                    <li></li>
                                    {/* <li>Booking Status: <strong>BOOKED</strong></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
                        
                <p class="text-center add_top_60"><a href="#0" class="btn_1 rounded">Load more</a></p>
            
            </div>
            
            <div class="bg_color_1">
                <div class="container margin_60_35">
                    <div class="row">
                        <div class="col-md-4">
                            <a href="#0" class="boxed_list">
                                <i class="pe-7s-help2"></i>
                                <h4>Need Help? Contact us</h4>
                                <p>Cum appareat maiestatis interpretaris et, et sit.</p>
                            </a>
                        </div>
                        <div class="col-md-4">
                            <a href="#0" class="boxed_list">
                                <i class="pe-7s-wallet"></i>
                                <h4>Payments and Refunds</h4>
                                <p>Qui ea nemore eruditi, magna prima possit eu mei.</p>
                            </a>
                        </div>
                        <div class="col-md-4">
                            <a href="#0" class="boxed_list">
                                <i class="pe-7s-note2"></i>
                                <h4>Quality Standards</h4>
                                <p>Hinc vituperata sed ut, pro laudem nonumes ex.</p>
                            </a>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        
        <Footer />

        </div>
        
        {/* <div id="sign-in-dialog" class="zoom-anim-dialog mfp-hide">
            <div class="small-dialog-header">
                <h3>Sign In</h3>
            </div>
            <form>
                <div class="sign-in-wrapper">
                    <a href="#0" class="social_bt facebook">Login with Facebook</a>
                    <a href="#0" class="social_bt google">Login with Google</a>
                    <div class="divider"><span>Or</span></div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" name="email" id="email"/>
                        <i class="icon_mail_alt"></i>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" name="password" id="password" value=""/>
                        <i class="icon_lock_alt"></i>
                    </div>
                    <div class="clearfix add_bottom_15">
                        <div class="checkboxes float-left">
                            <label class="container_check">Remember me
                              <input type="checkbox"/>
                              <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="float-right mt-1"><a id="forgot" href="javascript:void(0);">Forgot Password?</a></div>
                    </div>
                    <div class="text-center"><input type="submit" value="Log In" class="btn_1 full-width"/></div>
                    <div class="text-center">
                        Don’t have an account? <a href="register.html">Sign up</a>
                    </div>
                    <div id="forgot_pw">
                        <div class="form-group">
                            <label>Please confirm login email below</label>
                            <input type="email" class="form-control" name="email_forgot" id="email_forgot"/>
                            <i class="icon_mail_alt"></i>
                        </div>
                        <p>You will receive an email containing a link allowing you to reset your password to a new preferred one.</p>
                        <div class="text-center"><input type="submit" value="Reset Password" class="btn_1"/></div>
                    </div>
                </div>
            </form>
        
        </div> */}
        
        
        <div id="toTop"></div>
    
    </div>

    );
}
    
    
export default RoomListUser;
