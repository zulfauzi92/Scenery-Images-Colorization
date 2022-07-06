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

function OwnerDetail() {    
    const [room, setRoomDetail] = React.useState({detail_room: {}});
    const [room_type, setRoomType] = React.useState([]);
    const [facility, setFacility] = React.useState([]);
    const [gallery, setGallery] = React.useState([]);
    const [room_function, setRoomFunction] = React.useState([]);
    const [operational_times, setOperationalTimes] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const [category_price, setCategoryPrice] = React.useState([]);
    
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
                        
                        
                            

                            

                        </div>
                    
                </div>
                
            </div>
            
        </div>

        

        <Footer />

        </div>
        <div id="toTop"></div>

        
  
    </div>

    );
}
                        
export default OwnerDetail;
            