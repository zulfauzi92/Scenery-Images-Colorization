import React from 'react';
import Navbar from '../components/Navbar';
import axios from "axios";
import Footer from '../components/Footer';
// import { JWT_HEADER } from "../constants/urls";

function Colorize() {
	
    const [layout, setLayout] = React.useState(
		{file:undefined}
	);

    const [action, setAction] = React.useState("");

    const[filename, setFilename] = React.useState("");
    const[imageID, setImageID] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [loading2, setLoading2] = React.useState(false);

    const[filename2, setFilename2] = React.useState("");
    const[imageID2, setImageID2] = React.useState("");

	const layoutChange = (event) => {
		let images = [];

		for (let i = 0; i < event.target.files.length; i++) {
			images.push(URL.createObjectURL(event.target.files[i]))
		}
		setLayout({
			file:event.target.files[0]
		});
	}

	const _onSubmit = () => {
		
		// console.log(layout.file);

		var formData = new FormData();
        
		formData.append('colorless_link', layout.file);

		// console.log(formData);

		axios({
			method: "post",
			url: "http://localhost:8000/api/colorless/create",
			data: formData,
			headers: { 
				"Content-Type": "application/json",
				// Authorization: `Bearer ${JWT_HEADER}`
		
			},
		})
		.then((res) => {
            setFilename("http://127.0.0.1:8000/storage/"+ res.data.colorless.colorless_link)
            setImageID(res.data.colorless.id)
            setLoading(true);
			})
		.catch((err) => {
			console.log(err.response);
			// window.location = "/colorize";
			setLoading(false);
		});


	};

    const _onColorize = () => {

        var data = JSON.stringify(
            {
                "img_url":filename,
                "action":action
            }
        );

        axios({
			method: "post",
			url: "http://127.0.0.1:2135",
			data:data,
			headers: { 
				'Content-Type':'application/json',
				// Authorization: `Bearer ${JWT_HEADER}`
		
			},
		})
		.then((res) => {
            console.log(res.data)
            setFilename2("http://127.0.0.1:8000/storage/"+ res.data.colored.colored_link)
            setImageID2(res.data.colored.id)
			var formData2 = new FormData();
        
			formData2.append('colorless_id', imageID);
			formData2.append('colored_id', res.data.colored.id);
			formData2.append('action', action);
			axios({
				method: "post",
				url: "http://localhost:8000/api/colorization/create",
				data:formData2,
				headers: { 
					'Content-Type':'application/json',
					// Authorization: `Bearer ${JWT_HEADER}`
			
				},
			})
			.then((res) => {
				console.log(res.data)
	
				setLoading2(true);
			})
			.catch((err) => {
				console.log(err.response);
			});

            setLoading2(true);
		})
		.catch((err) => {
			console.log(err.response);
			// window.location = "/colorize";
			setLoading2(false);
            setLoading(false);
		});



    };

    return(
		<div>
			<div id="page">		
				<Navbar />
				<div>
					<section class="hero_in hotels">
						<div class="wrapper">
							<div class="container">
								<h1 class="fadeInUp"><span></span>Start Colorize</h1>
							</div>
						</div>
					</section>
					
					
					<div class="collapse" id="collapseMap">
						<div id="map" class="map"></div>
					</div>
				
			
					<div class="box_general padding_bottom">
						
						<div class="box_general padding_bottom">
							<div class="header_box version_2">
								<h2><i class="fa fa-image"></i>Upload Your Image</h2>
							</div>
								
							<div class="form-group">
								<div class="row">
	
									<div class="col-md-6">
													
										<input 
											type="file" 
											name="filename"
											class="form-control" 
											placeholder="layout"
											onChange={event => layoutChange(event)}
										/>
													
									</div>
	
									<div class="col-md-6">
	
										<button  
											// disabled={loading}
											className="btn_1"
											variant="primary"
											onClick={_onSubmit}>Upload
										</button>
	
									</div>
	
								</div>
							</div>
										
						</div>   
	
						<div class="box_general padding_bottom">
							{loading ? <center><img disabled={loading} src={filename}  width="512px" height="512"></img></center> : ""}
							
						</div>    
	
						 {loading ?
						<div class="box_general padding_bottom">
							<div class="header_box version_2">
								<h2><i class="fa fa-image"></i>Colorize Your Image</h2>
							</div>
								
							<div class="form-group">
								<div class="row">
	
									<div class="col-md-6">
										
										<select class="form-control"
											value={action} 
											onChange={(e) => {
												setAction(e.target.value);
												
											}}
											
										>
											<option value="">=== Select Your Resolution ===</option>
											{/* <option value="model1">Model1-64 super resolusi = 256</option> */}
											<option value="model1">Model1-256 super resolusi = 512</option>
											
											<option value="model3">Model2-wajah-256 super resolusi 512</option>
											
											
														
										</select>
													
									</div>
	
									<div class="col-md-6">
	
										<button  
											// disabled={loading2}
											className="btn_1"
											variant="primary"
											onClick={_onColorize}>Colorize
										</button>
	
									</div>
	
								</div>
							</div>
										
						</div> 
						: ""} 
							
						<div class="box_general padding_bottom">
							{loading2 ? <center><img  disabled={loading2} src={filename2} ></img></center> : ""}
							
						</div> 
						
						<br></br>
						
	
					</div>
					
				
					
				</div>
				
				<Footer />
	
			</div>
			
			
			<div id="toTop"></div>
		
		</div>
	
	);
}
    
    
export default Colorize;

                                // <div class="col-md-6">
								// 	<label>Type</label>
								// 	<input 
								// 		type="text" 
								// 		class="form-control"
								// 		value={room_type_name}
								// 		onChange={(e) => {
								// 		    setRoomTypeName(e.target.value);
								// 		}}
								// 	/>
								// </div>

                                // <div class="col-md-2">
												
								// 	<label>Capacity</label>
								// 	<input 
								// 		type="number" 
								// 		class="form-control"
								// 		value={capacity}
								// 		onChange={(e) => {
								// 			setCapacity(e.target.value);
								// 		}}
								// 	/>				
								// </div>