import React, { useEffect } from 'react';
//import Navbar from '../components/Navbar'
import ReactDOM from "react-dom";
import Footer from '../components/Footer'
import { useParams } from "react-router";
import { GET_DETAIL_ROOM, JWT_HEADER } from '../constants/urls'
import {
    BrowserRouter as Router,
    Switch,
    useLocation
  } from "react-router-dom";
import axios from 'axios';

function RoomDetailUser() {    
    const [room, setRoomDetail] = React.useState({detail_room: {}});
    const [category_price, setCategoryPrice] = React.useState([]);
    const [booking_date, setBookingDate] = React.useState("");
    const [quantity, setQuantity] = React.useState("");
    const [start_time, setStartTime] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(true);
    
    let location = useLocation();
    console.log(location.state);
    
    const room_id = location.state;
    console.log(room_id);

    

    useEffect(() => {
        
        fetchData(room_id);
        
    }, []);

    const _onSubmit = async () =>{
        console.log(room_id);
        console.log(price);
        console.log(booking_date);
        console.log(start_time);
        console.log(quantity);

    await axios
        .post("http://localhost:8000/api/my-booking/user/create", {
            room_id:room_id,
            category_price_id:price,
            starting_date:booking_date,
            starting_time:start_time,
            quantity:quantity
        }, {
            headers: {
                
                Authorization: `Bearer ${JWT_HEADER}`
            }
        })
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) =>{
            window.location = "/";
        })
    };
    const fetchData = async (room_id) => {
        setIsLoading(true);
        axios
          .get(GET_DETAIL_ROOM(room_id), {
            headers: {},
          })
          .then((res) => {
            setRoomDetail(res.data);
            console.log(res.data);
            setCategoryPrice(res.data.detail_room.category_price);
            console.log(category_price);
          })
          .catch((err) => {
            console.log(err);
            window.location = "/roomlist";
          });
        setIsLoading(false);
      };

    return(
        
    <div class="datepicker_mobile_full">
        
        <div id="page" class="theia-exception">
            
            <div>
                <section class="hero_in hotels_detail">
                    <div class="wrapper">
                        <div class="container">
                            <h1 class="fadeInUp"><span></span>{room.detail_room.name}</h1>
                        </div>
                        <span class="magnific-gallery">
                            <a href="img/gallery/hotel_list_1.jpg" class="btn_photos" title="Photo title" data-effect="mfp-zoom-in">View photos</a>
                            <a href="img/gallery/hotel_list_2.jpg" title="Photo title" data-effect="mfp-zoom-in"></a>
                            <a href="img/gallery/hotel_list_3.jpg" title="Photo title" data-effect="mfp-zoom-in"></a>
                        </span>
                    </div>
                </section>
                

                <div class="bg_color_1">
                    <nav class="secondary_nav sticky_horizontal">
                        <div class="container">
                            <ul class="clearfix">
                                <li><a href="#description" class="active">Description</a></li>
                                <li><a href="#available">Available</a></li>
                                <li><a href="#facility">Facility</a></li>
                                <li><a href="#roomfunction">Function</a></li>
                                <li><a href="#operationaltimes">Operational</a></li>
                                <li><a href="#sidebar">Booking</a></li>
                                <li></li>
                            </ul>
                        </div>
                    </nav>
                    <div class="container margin_60_35">
                        <div class="row">
                            <div class="col-lg-8">
                                <section id="description">
                                    <h2>Description</h2>
                                    <p>{room.detail_room.description} <strong>temporibus vim</strong>, ad sumo viris eloquentiam sed. Mea appareat omittantur eloquentiam ad, nam ei quas oportere democritum. Prima causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.</p>
                                    <p>Cum et probo menandri. Officiis consulatu pro et, ne sea sale invidunt, sed ut sint <strong>blandit</strong> efficiendi. Atomorum explicari eu qui, est enim quaerendum te. Quo harum viris id. Per ne quando dolore evertitur, pro ad cibo commune.</p>
                                    
                                    <hr/>
                                    
                                    <section id="available">
                                        <h3>Available Room</h3>
                                        <div id="instagram-feed-hotel" class="clearfix"></div>
                                        <hr/>
                                        <div class="room_type first">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <img src="assets/img/gallery/hotel_list_1.jpg" class="img-fluid" alt=""/>
                                                </div>
                                                <div class="col-md-8">
                                                    <h4>Single Room</h4>
                                                    <p>Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.</p>
                                                    <ul>
                                                        <li><strong>Room's Size: </strong>88m2</li>
                                                        <li><strong>Capacity: </strong>30 orang</li>
                                                    </ul>
                                                    <p class="price">From <strong>$54</strong> /per hour</p>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        
                                        <div class="room_type gray">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <img src="assets/img/gallery/hotel_list_2.jpg" class="img-fluid" alt=""/>
                                                </div>
                                                <div class="col-md-8">
                                                    <h4>Double Room</h4>
                                                    <p>Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.</p>
                                                    <ul>
                                                        <li><strong>Room's Size: </strong>88m2</li>
                                                        <li><strong>Capacity: </strong>30 orang</li>
                                                    </ul>
                                                    <p class="price">From <strong>$54</strong> /per hour</p>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        
                                        <div class="room_type last">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <img src="assets/img/gallery/hotel_list_3.jpg" class="img-fluid" alt=""/>
                                                </div>
                                                <div class="col-md-8">
                                                    <h4>Suite Room</h4>
                                                    <p>Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.</p>
                                                    <ul>
                                                        <li><strong>Room's Size: </strong>88m2</li>
                                                        <li><strong>Capacity: </strong>30 orang</li>
                                                    </ul>
                                                    <p class="price">From <strong>$54</strong> /per hour</p>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </section>
                                    
                                    <section id="facility">
                                        <hr/>
                                        <h3>Facility</h3>
                                        <div id="instagram-feed-hotel" class="clearfix"></div>
                                        <hr/>
                                        <div class="row">
                                            <div class="col">
                                                <ul class="hotel_facilities">
                                                    <li><img src="assets/img/hotel_facilites_icon_3.svg" alt=""/>King size Bed</li>
                                                    <li><img src="assets/img/hotel_facilites_icon_4.svg" alt=""/>Free Wifi</li>
                                                    <li><img src="assets/img/hotel_facilites_icon_6.svg" alt=""/>Bathtub</li>
                                                    <li><img src="assets/img/hotel_facilites_icon_7.svg" alt=""/>Air Condition</li>
                                                    <li><img src="assets/img/hotel_facilites_icon_9.svg" alt=""/>Swimming pool</li>
                                                    <li><img src="assets/img/hotel_facilites_icon_3.svg" alt=""/>Hairdryer</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>
                                    <section id="roomfunction">
                                        <hr/>
                                        <h3>Room Function</h3>
                                        <div id="instagram-feed-hotel" class="clearfix"></div>
                                        <hr/>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <ul class="bullets">
                                                    <li>Dolorem mediocritatem</li>
                                                    <li>Mea appareat</li>
                                                    <li>Prima causae</li>
                                                    <li>Singulis indoctum</li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-6">
                                                <ul class="bullets">
                                                    <li>Timeam inimicus</li>
                                                    <li>Oportere democritum</li>
                                                    <li>Cetero inermis</li>
                                                    <li>Pertinacia eum</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>
                                    <section id="operationaltimes">
                                        <hr/>
                                        <h3>Operational Times</h3>
                                        <div id="instagram-feed-hotel" class="clearfix"></div>
                                        <hr/>
                                        <div class="row">
                                            <div class="col">
                                                <ul>
                                                    <li>Monday .................................................................................................................. <em>Pk09:00 - Pk17.00</em></li>
                                                    <li>Tuesday ................................................................................................................. <em>Pk09:00 - Pk17.00</em></li>
                                                    <li>Wednesday ........................................................................................................ <em>Pk09:00 - Pk17.00</em></li>
                                                    <li>Thursday .............................................................................................................. <em>Pk09:00 - Pk17.00</em></li>
                                                    <li>Friday ..................................................................................................................... <em>Pk09:00 - Pk17.00</em></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>
                                    
                                    <hr/>
                                    <h3>Location</h3>
                                    <div id="map" class="map map_single add_bottom_30"></div>
                                    
                                </section>

                            </div>
                        
                        
                            <aside class="col-lg-4" id="sidebar">
                                
                                <form >

                                    <div class="form-group input-dates">
                                        <div class="header_box version_2">
                                            <h2>Booking</h2>
                                        </div>
                                            <label>When..</label>
                                            <input class="form-control"
                                                type="date"  
                                                value={booking_date} 
                                                onChange={(e) => {
                                                    setBookingDate(e.target.value);
                                                }}

                                            />
                                        
                                    </div>

                                    <div class="form-group input-date">
                                        <input 
                                            class="form-control" 
                                            type="number" 
                                            placeholder="Quantity"
                                            value={quantity} 
                                            onChange={(e) => {
                                                setQuantity(e.target.value);
                                            }}
                                        />

                                    </div>

                                    <div class="form-group input-dates">
                                        <label>Starting Time</label>
                                        <input 
                                            class="form-control" 
                                            type="time"  
                                            placeholder="Starting Time"
                                            value={start_time} 
                                            onChange={(e) => {
                                                setStartTime(e.target.value);
                                            }}
                                        />
                                    </div>

                                    <div class="form-group">
                                        <label>Price</label>
                                        <select class="form-control"
                                         value={price}
                                         onChange={(e) => {
                                             setPrice(e.target.value);
                                         }}>
                                             <option>== Select Price ==</option>
                                            {category_price.map(item => (
                                                <option 
                                                    value={item.id}
                                                >
                                                    {item.name} - {item.price}
                                                
                                                </option>
                                            ))}   
                                        </select>
                                    </div>

                                    
                                    
                                        
                                    <button
                                        className="btn_1 rounded full-width add_top_30"
                                        variant="primary"
                                        onClick={_onSubmit}>Purchase
                                    </button>
                                    <div class="text-center"><small>No money charged in this step</small></div>
                                
                               

                                </form> 
                            </aside>

                            

                        </div>
                    
                </div>
                
            </div>
            
        </div>

        

        <Footer />

        </div>
        <div id="toTop"></div>

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
  
    </div>

    );
}
                        
export default RoomDetailUser;
            