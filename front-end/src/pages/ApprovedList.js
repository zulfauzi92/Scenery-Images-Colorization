import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavbarUser';
import FooterOwner from '../components/FooterOwner';
import { JWT_HEADER } from "../constants/urls";
import axios from "axios";

function ApprovedList() {

    const [approved, setApproved] = React.useState({approved_list: []});

    React.useEffect(() => {
        const fetchData = async () => {
          
          await axios
            .get("http://localhost:8000/api/my-booking/user/approved", {
              headers: { Authorization: `Bearer ${JWT_HEADER}` },
            })
            .then((res) => {
              console.log(res.data);
              setApproved(res.data);
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
                        <div class="header_box">
                            <h2 class="d-inline-block">Approved list</h2>
                            
                        </div>
                        <div class="list_general">
                            <ul>       
                                {approved.approved_list.map(item => (
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
                                                <li><strong>Owner</strong> {item.owner}</li>
                                                <li><strong>Phone</strong> {item.phone_owner}</li>
                                            </ul>
                                            <p><a href="#0" class="btn_1 gray"><i class="fa fa-fw fa-envelope"></i> Send Message</a></p>
                                            <ul class="buttons">
                                                <li><Link to={{
                                                            pathname: "/invoice",
                                                            state: item.booking_id // your data array of objects
                                                        }} 
                                                        
                                                        class="btn_1 gray approve"
                                                    >
                                                        <i class="fa fa-fw fa-check-circle-o"></i> Invoice
                                                    </Link>
                                                </li>
                                            </ul>
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
    
export default ApprovedList;