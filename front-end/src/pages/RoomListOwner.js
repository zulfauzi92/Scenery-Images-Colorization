import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavbarOwner';
import FooterOwner from '../components/FooterOwner';
import axios from 'axios';
import { GET_OFFICE_ROOMS, STORAGE_URL, JWT_HEADER } from '../constants/urls';

function RoomListOwner() {
    const [list, setRooms] = React.useState({my_office: []});
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        await axios
          .get(GET_OFFICE_ROOMS(), {
            headers: {Authorization: `Bearer ${JWT_HEADER}`},
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
        <Navbar />
        <div id="page">
        
        <main>
            
            <section class="hero_in hotels">
                <div class="wrapper">
                    <div class="container">
                        <h1 class="fadeInUp"><span></span>Your Rooms</h1>
                    </div>
                </div>
            </section>
            

            <div class="container margin_60_35">
                
            <div class="wrapper-grid">
                <div class="row">
                    {list.my_office.map(item => (
                        <div class="col-xl-4 col-lg-6 col-md-6">
                        <div class="box_grid">
                            <figure>
                                <a href="#0" class="wish_bt liked"></a>
                                <Link to={{
                                        pathname: "/ownerdetail",
                                        state: item.id // your data array of objects
                                    }}><img src={STORAGE_URL + item.filename} class="img-fluid" alt="" width="800" height="533"/></Link>
                                <small>{item.name}</small>
                                <div class="read_more"><Link to={{
                                        pathname: "/ownerdetail",
                                        state: item.id // your data array of objects
                                    }}><span>Read more</span></Link></div>
                            </figure>
                            <div class="wrapper">
                                <h3><Link to={{
                                        pathname: "/ownerdetail",
                                        state: item.id // your data array of objects
                                    }}>{item.name}</Link></h3>
                                <p>{item.description}</p>
                                {/* <span class="price">Start from <strong>$54</strong> /per hour</span> */}
                            </div>
                            <ul>
                                <li>{item.address}</li>
                                <li></li>
                                {/* <li><div class="score"><span>Booking<em>Status</em></span><strong>BOOKED</strong></div></li> */}
                            </ul>
                        </div>
                        </div>
                    ))}
                    
                
                    
                
                </div>
                
                </div>
            
                            
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
                                <h4>Payments</h4>
                                <p>Qui ea nemore eruditi, magna prima possit eu mei.</p>
                            </a>
                        </div>
                        <div class="col-md-4">
                            <a href="#0" class="boxed_list">
                                <i class="pe-7s-note2"></i>
                                <h4>Cancel Policy</h4>
                                <p>Hinc vituperata sed ut, pro laudem nonumes ex.</p>
                            </a>
                        </div>
                    </div>
                    
                </div>
            
            </div>
        
            
        </main>

        <FooterOwner />

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
    
    
export default RoomListOwner;