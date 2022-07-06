import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavbarOwner';
import FooterOwner from '../components/FooterOwner';
import { JWT_HEADER } from "../constants/urls";
import axios from "axios";

function ApprovedRoom() {

    const [pending, setPending] = React.useState({approved_list: []});

    React.useEffect(() => {
        const fetchData = async () => {
          
          await axios
            .get("http://localhost:8000/api/my-booking/owner/approved-room", {
              headers: { Authorization: `Bearer ${JWT_HEADER}` },
            })
            .then((res) => {
              console.log(res.data);
              console.log(JWT_HEADER);
              setPending(res.data);
            })
            .catch((err) => {
              console.log(err);
              window.location = "/";
            });
          
        };
        fetchData();
      }, []);

    return(           
        <div class="fixed-nav sticky-footer" id="page-top">          
            <Navbar />  
                <div class="content-wrapper" style={{backgroundColor: '#707070'}}>
                    <div class="container-fluid">             
                    <div class="box_general">
                        <div class="list_general">
                            <ul>
                                {pending.approved_list.map(item => (
                                    <li>
                                        <figure><img src="assets/img/item_1.jpg" alt=""/></figure>
                                        <h4>{item.room_name} <i class={item.status}>{item.status}</i></h4>
                                        <ul class="booking_list">
                                            <li><strong>Booking Date</strong> {item.booking_date}</li>
                                            <li><strong>Starting Time</strong> {item.starting_time}</li>
                                            <li><strong>Price Type</strong> {item.price_type}</li>
                                            <li><strong>Price</strong> {item.unit_price}</li>
                                            <li><strong>Quantity</strong> {item.quantity}</li>
                                            <li><strong>Total Price</strong> {item.total_price}</li>
                                            <li><strong>Address</strong> {item.address} </li>
                                            <li><strong>Customer</strong> {item.customer}</li>
                                            <li><strong>Phone</strong> {item.phone_customer}</li>
                                        </ul>
                                        <p><a href="#0" class="btn_1 gray"><i class="fa fa-fw fa-envelope"></i> Send Message</a></p>
                                        
                                    </li>

                                ))}
                                
                                
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
    
export default ApprovedRoom;