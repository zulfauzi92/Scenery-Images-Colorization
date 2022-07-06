import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavbarUser';
import FooterOwner from '../components/FooterOwner';

function MyBooking() {
    return(           
        <div class="fixed-nav sticky-footer" id="page-top">          
            <Navbar />  
                <div class="content-wrapper" style={{backgroundColor: '#707070'}}>
                    <div class="container-fluid">             
                    <div class="box_general">
                        <div class="header_box">
                            <h2 class="d-inline-block">Bookings list</h2>
                            
                        </div>
                        <div class="list_general">
                            <ul>
                                <li>
                                    <figure><img src="assets/img/item_1.jpg" alt=""/></figure>
                                    <h4>Hotel Mariott <i class="pending">Pending</i></h4>
                                    <ul class="booking_list">
                                        <li><strong>Booking Date</strong> 11 November 2017</li>
                                        <li><strong>Starting Time</strong> 9 PM</li>
                                        <li><strong>Duration</strong> 1h 30min</li>
                                        <li><strong>Booking details</strong> Suite Room</li>
                                        <li><strong>Owner</strong> Mark Twain</li>
                                    </ul>
                                    <p><a href="#0" class="btn_1 gray"><i class="fa fa-fw fa-envelope"></i> Send Message</a></p>
                                    <ul class="buttons">
                                        <li><a href="#0" class="btn_1 gray approve"><i class="fa fa-fw fa-check-circle-o"></i> Invoice</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <figure><img src="assets/img/item_2.jpg" alt=""/></figure>
                                    <h4>Da Alfredo <i class="cancel">Cancelled</i></h4>
                                    <ul class="booking_list">
                                        <li><strong>Booking date</strong> 11 November 2017</li>
                                        <li><strong>Starting Time</strong> 10 AM</li>
                                        <li><strong>Duration</strong> 30 minute</li>
                                        <li><strong>Booking details</strong> Single Room</li>
                                        <li><strong>Client</strong> Mark Twain</li>
                                    </ul>
                                    <p><a href="#0" class="btn_1 gray"><i class="fa fa-fw fa-envelope"></i> Send Message</a></p>
                                    <ul class="buttons">
                                        <li><a href="#0" class="btn_1 gray approve"><i class="fa fa-fw fa-check-circle-o"></i> Invoice</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <figure><img src="assets/img/item_3.jpg" alt=""/></figure>
                                    <h4>Pompidue Museum <i class="approved">Approved</i></h4>
                                    <ul class="booking_list">
                                        <li><strong>Booking date</strong> 11 November 2017</li>
                                        <li><strong>Starting Time</strong> 8 PM</li>
                                        <li><strong>Duration</strong> 2 hour</li>
                                        <li><strong>Booking details</strong> Double Room</li>
                                        <li><strong>Client</strong> Mark Twain</li>
                                    </ul>
                                    <p><a href="#0" class="btn_1 gray"><i class="fa fa-fw fa-envelope"></i> Send Message</a></p>
                                    <ul class="buttons">
                                        <li><a href="#0" class="btn_1 gray approve"><i class="fa fa-fw fa-check-circle-o"></i> Invoice</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                
                </div>
            
            </div>
            
            <FooterOwner />
        
            <a class="scroll-to-top rounded" href="#page-top">
                <i class="fa fa-angle-up"></i>
            </a>
        
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                        <a class="btn btn-primary" href="login.html">Logout</a>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>

    );
}
    
export default MyBooking;