import React from 'react';
//import Navbar from '../components/Navbar';
import { Button, Row, Col, Form, InputGroup, Image } from "react-bootstrap";
//import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import { setUserLogin } from "../utils/auth";
import axios from "axios";
import { REGISTER_API } from "../constants/urls";

function Register() {
	const [role, setRole] = React.useState("");
	const [name, setName] = React.useState("");
	const [phone_number, setPhone] = React.useState("");
	const [address, setAddress] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [passwordConfirmation, setPasswordConfirmation] = React.useState("");
	const [errorName, setErrorName] = React.useState("");
	const [errorAddress, setErrorAddress] = React.useState("");
	const [errorPhone, setErrorPhone] = React.useState("");
	const [errorEmail, setErrorEmail] = React.useState("");
	const [errorPassword, setErrorPassword] = React.useState("");
	const [errorRole, setErrorRole] = React.useState("");
	const [
	errorPasswordConfirmation,
	setErrorPasswordConfirmation,
	] = React.useState("");
	const [isLoggedIn, setIsLoggedIn] = React.useState(false);
	const [loading, setLoading] = React.useState(false);

	React.useEffect(() => {
	if (name) {
		setErrorName("");
	}
	if (phone_number) {
		setErrorPhone("");
	}
	if (address) {
		setErrorAddress("");
	}
	if (email) {
		setErrorEmail("");
	}
	if (password) {
		setErrorPassword("");
	}
	if (passwordConfirmation) {
		setErrorPasswordConfirmation("");
	}
	if (role) {
		setErrorRole("");
	}
	return () => {};
	}, [name, phone_number, address, email, password, passwordConfirmation, role]);

	const _onSubmit = () => {
	setLoading(true);
	axios
		.post(REGISTER_API, {
		name: name,
		address: address,
		phone_number: phone_number,
		email: email,
		password: password,
		password_confirmation: passwordConfirmation,
		role: role,
		})
		.then((res) => {
		// setUserLogin({
		// 	token: res.data.token,
		// 	user: res.data.user,
		// 	status: res.data.status
		// });
		setIsLoggedIn(true);
		setLoading(false);
		window.location = "/sign-in";
		})
		.catch((err) => {
		console.log(err.response.data);
		if (err.response.data) {
			setErrorName(err.response.data.user?.name ? err.response.data.user.name : "");
			setErrorEmail(
			err.response.data.user?.email ? err.response.data.user.email : ""
			);
			setErrorPassword(
			err.response.data.user?.password ? err.response.data.user.password : ""
			);
			setErrorPhone(
			err.response.data.user?.phone ? err.response.data.user.phone : ""
			);
			setErrorPassword(
			err.response.data.user?.password ? err.response.data.user.password : ""
			);
			setErrorPasswordConfirmation(
			err.response.data.user?.password_confirmation
				? err.response.data.user.password_confirmation
				: ""
			);
		}
		setLoading(false);
		});
	};

    return(
      <div id="register_bg">
		
      <nav id="menu" class="fake_menu"></nav>
      
      {/* <div id="preloader">
        <div data-loader="circle-side"></div>
      </div> */}
      
      <div id="login">
        <aside>
          <figure>
          <Link to="/"><img src="assets/img/otakkananlogo.png" width="160" height="50" data-retina="true" alt="" class="logo_sticky"/></Link>
          </figure>
          <form  >
            <div class="form-group">
              <label>Your Name</label>
              <input 
                class="form-control" 
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setErrorName("");
                           }}
              />
              <i class="ti-user"></i>
              {errorName !== "" ? (
                          <span className="text-danger ml-2">{errorName}</span>
                        ) : (
                          ""
                        )}
            </div>
            <div class="form-group">
              <label>Your Address</label>
              <input 
                class="form-control" 
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                  setErrorAddress("");
                           }}
              />
              <i class="icon_pin_alt"></i>
              {errorAddress !== "" ? (
                          <span className="text-danger ml-2">{errorAddress}</span>
                        ) : (
                          ""
                        )}
            </div>
            <div class="form-group">
              <label>Your Phone Number</label>
              <input 
                class="form-control" 
                type="tel"
                placeholder="Phone number"
                value={phone_number}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setErrorPhone("");
                           }}
              />
              <i class="ti-mobile"></i>
              {errorPhone !== "" ? (
                          <span className="text-danger ml-2">{errorPhone}</span>
                        ) : (
                          ""
                        )}
            </div>
            <div class="form-group">
              <label>Your Email</label>
              <input 
                class="form-control" 
                type="mail"
                placeholder="Mail"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrorEmail("");
                           }}
              />
              <i class="icon_mail_alt"></i>
              {errorEmail !== "" ? (
                          <span className="text-danger ml-2">{errorEmail}</span>
                        ) : (
                          ""
                        )}
            </div>
            <div class="form-group">
              <label>Your password</label>
              <input 
                class="form-control" 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorPassword("");
                           }}
                id="password1"
              />
              <i class="icon_lock_alt"></i>
              {errorPassword !== "" ? (
                          <span className="text-danger ml-2">{errorPassword}</span>
                        ) : (
                          ""
                        )}
            </div>
            <div class="form-group">
              <label>Confirm password</label>
              <input 
                class="form-control" 
                type="password"
                placeholder="Confirm password"
                value={passwordConfirmation}
                onChange={(e) => {
                  setPasswordConfirmation(e.target.value);
                  setErrorPasswordConfirmation("");
                           }}
                id="password2"
              />
              <i class="icon_lock_alt"></i>
              {errorPasswordConfirmation !== "" ? (
                          <span className="text-danger ml-2">{errorPasswordConfirmation}</span>
                        ) : (
                          ""
                        )}
            </div>
  
            <div class="form-group">
              <label>Your Role</label>
              {/* <div class="form-control"> */}
              
                <select class="form-control"
                  value={role} 
                  onChange={(e) => {
                      setRole(e.target.value);
                      setErrorRole("");
                  }}
                
                >
                  <option value="">=== Select Your Role ===</option>
                  <option value="user">User</option>
                  <option value="owner">Owner</option>		
                            
                </select>
                
                
                
              {/* </div> */}
              {/* <input 
                class="form-control" 
                type="text"
                placeholder="Role"
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                  setErrorRole("");
                           }}
              />
              <i class="ti-user"></i>
              {errorRole !== "" ? (
                          <span className="text-danger ml-2">{errorRole}</span>
                        ) : (
                          ""
                        )} */}
            </div>
            
            {/* <div id="pass-info" class="clearfix"></div> */}
            <button  
              disabled={loading}
              className="btn_1 rounded full-width add_top_30"
              variant="primary"
              block
              onClick={_onSubmit}>Register Now!
            </button>
            
            <div class="text-center add_top_10">Already have an acccount? <strong><Link to="/sign-in">Sign In</Link></strong></div>
          
          </form>
          <div class="copy">© 2021 Otak Kanan Office</div>
        </aside>
      </div>
    </div>
    );
}
    
    
export default Register;