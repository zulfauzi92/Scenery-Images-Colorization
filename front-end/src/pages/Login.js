import React from 'react';
//import Navbar from '../components/Navbar';
//import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { setUserLogin } from "../utils/auth";
import axios from "axios";
import { LOGIN_API } from "../constants/urls";

function Login() {
	const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errorEmail, setErrorEmail] = React.useState("");
    const [errorPassword, setErrorPassword] = React.useState("");
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
  
    React.useEffect(() => {
      if (email) {
        setErrorEmail("");
      }
      if (password) {
        setErrorPassword("");
      }
      return () => {};
    }, [email, password]);
  
    const _enterPressed = (event) => {
      if (event.key === "Enter") {
        _onSubmit();
      }
    };
  
    const _onSubmit = () => {
      setLoading(true);
      axios
        .post(LOGIN_API, {
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.data.user.role == "user" || res.data.user.role == "owner") {
            setUserLogin({
              token: res.data.token,
			  user: res.data.user,
            });
			
            setIsLoggedIn(true);
			if (res.data.user.role == "user")
           		window.location = "/user";
			else if(res.data.user.role == "owner")
				window.location = "/ownersroom";
          	} else {
            	setErrorEmail("You're not and Owner or User");
          	}
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          if (err.response) {
            if (err.response.data?.error) {
              setErrorEmail(
                err.response.data?.error ? err.response.data.error : ""
              );
            } else if (err.response.data?.email || err.response.data?.password) {
              setErrorEmail(
                err.response.data?.email ? err.response.data.email : ""
              );
              setErrorPassword(
                err.response.data?.password ? err.response.data.password : ""
              );
            }
          } else {
            setErrorEmail(JSON.stringify(err));
          }
          setLoading(false);
        });
    };

    return(

		<div id="login_bg">
			
			<nav id="menu" class="fake_menu"></nav>
			
			<div id="preloader">
				<div data-loader="circle-side"></div>
			</div>



			<div id="login">
				<aside>
					<figure>
						<Link to="/"><img src="assets/img/otakkananlogo.png" width="160" height="50" data-retina="true" alt="" class="logo_sticky"/></Link>
					</figure>
					<form>
						<div class="access_social">
							<a href="#0" class="social_bt facebook">Login with Facebook</a>
							<a href="#0" class="social_bt google">Login with Google</a>
							<a href="#0" class="social_bt linkedin">Login with Linkedin</a>
						</div>
						<div class="divider"><span>Or</span></div>
						<div class="form-group">
							<label>Email</label>
							<input 
								type="email" 
								class="form-control" 
								name="email" 
								id="email"
								placeholder="Email"
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
									setErrorEmail("");
								}}
								onKeyPress={(e) => {
									_enterPressed(e);
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
							<label>Password</label>
							<input 
								type="password" 
								class="form-control" 
								name="password" 
								id="password"
								placeholder="Password"
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
									setErrorPassword("");
								}}
								onKeyPress={(e) => {
									_enterPressed(e);
								}}
							/>
							<i class="icon_lock_alt"></i>
							{errorPassword !== "" ? (
								<span className="text-danger ml-2">{errorPassword}</span>
							) : (
								""
							)}
						</div>
						<div class="clearfix add_bottom_30">
							<div class="checkboxes float-left">
								<label class="container_check">Remember me
								<input type="checkbox"/>
								<span class="checkmark"></span>
								</label>
							</div>
							<div class="float-right mt-1"><a id="forgot" href="javascript:void(0);">Forgot Password?</a></div>
						</div>
						<button 
							disabled={loading}
							className="btn_1 rounded full-width"
							variant="primary"
							block
							onClick={_onSubmit}
						>
							Login
						</button>
						<div class="text-center add_top_10">New to Otak Kanan Office	? <strong><a href="/sign-up">Sign up!</a></strong></div>
					</form>
					<div class="copy">© 2021 Otak Kanan Office</div>
				</aside>
			</div>
			
		</div>

	);
}
    
    
export default Login;