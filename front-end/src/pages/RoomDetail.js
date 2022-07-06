import React, { useEffect } from 'react';
import Navbar from '../components/Navbar'
import ReactDOM from "react-dom";
import Footer from '../components/Footer'
import Carousel from 'react-elastic-carousel';

import { GET_DETAIL_ROOM, JWT_HEADER, STORAGE_URL } from '../constants/urls'
import {
    BrowserRouter as Router,
    Switch,
    useLocation,
    Link
  } from "react-router-dom";
import axios from 'axios';

function RoomDetail() {    
    const [room, setRoomDetail] = React.useState({detail_room: {}});
    const [room_type, setRoomType] = React.useState([]);
    const [facility, setFacility] = React.useState([]);
    const [gallery, setGallery] = React.useState([]);
    const [room_function, setRoomFunction] = React.useState([]);
    const [operational_times, setOperationalTimes] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const [category_price, setCategoryPrice] = React.useState([]);
    const [booking_date, setBookingDate] = React.useState("");
    const [quantity, setQuantity] = React.useState("");
    const [start_time, setStartTime] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    
    let location = useLocation();
    console.log(location.state);
    
    const room_id = location.state;
    console.log(room_id);

    useEffect(() => {

        fetchData(room_id);
  
    }, []);

    const fetchData = async (room_id) => {
        setIsLoading(true);
        await axios
          .get(GET_DETAIL_ROOM(room_id), {
            headers: {},
          })
          .then((res) => {
            console.log(res.data);
            setRoomDetail(res.data);
            setRoomType(res.data.detail_room.room_type);
            setFacility(res.data.detail_room.facility);
            setGallery(res.data.detail_room.gallery);
            setRoomFunction(res.data.detail_room.room_function);
            setOperationalTimes(res.data.detail_room.operational_times);
            setCategoryPrice(res.data.detail_room.category_price);
            console.log(category_price);
            
          })
          .catch((err) => {
            console.log(err);
            window.location = "/roomlist";
          });
        setIsLoading(false);
      };

      const _onSubmit = () =>{
        setLoading(true);
        console.log(room.detail_room.id);
        console.log(price);
        console.log(booking_date);
        console.log(start_time);
        console.log(quantity);

      axios
        .post("http://localhost:8000/api/my-booking/user/create", {
            room_id:room.detail_room.id,
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
            setLoading(false);
            console.log(res.data)
            window.location = "/pendinglist";
        })
        .catch((err) =>{
            setLoading(false)
            console.log(err.response.data)
           
        })
    };

    return(
        
    <div class="datepicker_mobile_full">
        
        <div id="page" class="theia-exception">
            {/* <Navbar />   */}
            <div>
                <section class="hero_in hotels_detail">
                    <div class="wrapper">
                        <div class="container">
                            <h1 class="fadeInUp"><span></span>{room.detail_room.name}</h1>
                        </div>
                        {/* <span class="magnific-gallery"> */}
                            <div>
                        <Carousel>
                            {gallery.map(item => (
                                <img src={STORAGE_URL + item.filename}  width="1600px" height="1067"></img>
                            ))}
                        </Carousel>
                        </div>
                            
                        {/* </span> */}
                    </div>
                </section>
                

                <div class="bg_color_1">
                    <nav class="secondary_nav sticky_horizontal">
                        <div class="container">
                            <ul class="clearfix">
                                <li><a href="#description" class="active">Description</a></li>
                                <li><a href="#location" >Locations</a></li>
                                <li><a href="#roomtype">RoomType</a></li>
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
                                    <h2>{room.detail_room.name}</h2>
                                    <hr/>       
                                    <h2>Description</h2>
                                    <hr/>
                                    <p>{room.detail_room.description}</p>
                                    
                                    <section id="location">
                                        <hr/> 
                                            <h2 >Location</h2>
                                        <hr/> 
                                        <p>{room.detail_room.address}</p>
                                        {/* <div id="map" class="map map_single add_bottom_30"></div> */}
                                      
                                    </section>
                                    
                                    <section id="roomtype">
                                        <hr/> 
                                            <h3>Room Type</h3>
                                        <hr/>
                                        {room_type.map(item => (
                                            <div class="room_type first">
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <img src={STORAGE_URL + item.layout} class="img-fluid" alt="" width="150" height="150"/>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <h4>{item.name}</h4>
                                                        <ul>
                                                            <li><strong>Capacity: </strong>{item.capacity}</li>
                                                        </ul>
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </section>
                                    
                                    <section id="facility">
                                        <hr/>
                                        <h3>Facility</h3>
                                        <hr/>
                                        <div class="row">
                                            <div class="col">
                                                <ul class="hotel_facilities">
                                                    {facility.map(item => (
                                                        <li><img src="" alt=""/>{item.name}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </section>
                                    <section id="roomfunction">
                                        <hr/>
                                        <h3>Room Function</h3>
                                        <hr/>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <ul class="bullets">
                                                    {room_function.map(item => (
                                                        <li><img src="" alt=""/>{item.name}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </section>
                                    <section id="operationaltimes">
                                        <hr/>
                                        <h3>Operational Times</h3>
                                        
                                        <hr/>
                                        
                                        <div class="row">
                                            <div class="col">
                                                <ul>
                                                
                                                {operational_times.map(item => (
                                                    <li>{item.day} .................................................................................................................. <em>Pk{item.open_times} - Pk{item.close_times}</em></li>
                                                ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </section>
                                    
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
                                        disabled={loading}
                                        block
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
                        
export default RoomDetail;
            