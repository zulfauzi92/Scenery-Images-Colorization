import React from 'react';
import { GET_INVOICE, JWT_HEADER} from '../constants/urls'
import {
    BrowserRouter as Router,
    Switch,
    useLocation,
    Link
  } from "react-router-dom";
import axios from 'axios';

function Invoice () {

    const [invoice, setInvoice] = React.useState({});

    let location = useLocation();
    console.log(location.state);
    
    const booking_id = location.state;
    console.log(booking_id);

    React.useEffect(() => {
        const fetchData = async () => {
          
          await axios
            .get(GET_INVOICE(booking_id), {
              headers: { Authorization: `Bearer ${JWT_HEADER}` },
            })
            .then((res) => {
              console.log(res.data);
              setInvoice(res.data);
              console.log(invoice);
            })
            .catch((err) => {
              console.log(err);
              window.location = "/approvedlist";
            });
          
        };
        fetchData();
      }, []);

    return(
        <div id="page">
            <div class="container">
                
                <div class="row">

                    <div class="col-12">

                        <div class="invoice-title add_top_30">
                            <h2>Booking Invoice</h2><h3 class="float-right"> # {invoice.booking_id}</h3>
                        </div>
                        <hr></hr>

                        <div class="row">

                            <div class="col-6">
                                <address>
                                    <strong>Billed To:</strong><br></br>
                                    {invoice.customer_name} <br></br>
                                    {invoice.customer_email} <br></br>
                                    {invoice.customer_phone} <br></br>
                                    {invoice.customer_address}
                                </address>
                            </div>

                            <div class="col-6 text-right">
                                <address>
                                    <strong>Room Owner:</strong><br></br>
                                    {invoice.owner_name} <br></br>
                                    {invoice.owner_email} <br></br>
                                    {invoice.owner_phone} <br></br>
                                    {invoice.owner_address}
                                </address>
                            </div>

                        </div>

                        <div class="row">
                            
                            <div class="col-6">
                                <address>
                                    <strong>Booking Date:</strong><br></br>
                                    {invoice.booking_date} <br></br>
                                </address>
                            </div>

                            <div class="col-6 text-right">
                                
                            </div>

                        </div>

                    </div>

                </div>

                <div class="row">

                    <div class="col-lg-12">
                        <div class="add_top_15">
                            <h3><strong>Booking summary</strong></h3>
                                <div class="table-responsive">
                                    <table class="table table-condensed">
                                        <thead>
                                            <tr>
                                                <td><strong>Room Name</strong></td>
                                                <td class="text-center"><strong>Room Address</strong></td>
                                                <td class="text-center"><strong>Type</strong></td>
                                                <td class="text-center"><strong>Price</strong></td>
                                                <td class="text-center"><strong>Quantity</strong></td>
                                                <td class="text-right"><strong>Totals</strong></td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{invoice.room_name}</td>
                                                <td class="text-center">{invoice.room_address}</td>
                                                <td class="text-center">{invoice.price_type}</td>
                                                <td class="text-center">{invoice.price}</td>
                                                <td class="text-center">{invoice.quantity}</td>
                                                <td class="text-right">{invoice.total_price}</td>
                                            </tr>

                                            <tr>
                                                
                                            </tr>
                                            
                                            <tr>
                                                <td class="no-line"></td>
                                                <td class="no-line"></td>
                                                <td class="no-line"></td>
                                                <td class="no-line"></td>
                                                <td class="no-line text-center"><strong>Total</strong></td>
                                                <td class="no-line text-right">{invoice.total_price}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                        </div>
                    </div>

                </div>

               


            </div>
        </div>
    );

}

export default Invoice;