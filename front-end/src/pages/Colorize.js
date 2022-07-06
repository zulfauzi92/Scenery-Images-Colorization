import React from 'react';
import Navbar from '../components/Navbar';
// import FooterOwner from '../components/FooterOwner';
// import IconButton from '@material-ui/core/IconButton';
// import RemoveIcon from '@material-ui/icons/Remove';
import axios from "axios";
import { JWT_HEADER } from "../constants/urls";

function Colorize() {

	const [loading, setLoading] = React.useState(false);
	
	const [capacity, setCapacity] = React.useState("");
	const [layout, setLayout] = React.useState(
		{file:undefined}
	);
	const [room_type_name, setRoomTypeName] = React.useState("");
	
	
	const[state, setState] = React.useState({
		selectedFiles:undefined
	})

	
	const[length, setLength] = React.useState();
	const files = [];

	const handleChangeInput6 = (event) => {
		let images = [];

		for (let i = 0; i < event.target.files.length; i++) {
			images.push(URL.createObjectURL(event.target.files[i]))
			// formData.append('filename['+i+']', event.target.files[i]);
			files.push(event.target.files[i]);
		}
		console.log(files);
		setLength(event.target.files.length);
		setState({
			selectedFiles:files
		});
	}

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
		
		setLoading(true);
		
		console.log(state.selectedFiles);
		console.log(layout.file);
		// console.log(JWT_HEADER);

		

		var formData = new FormData();
		formData.append('capacity', capacity);
		formData.append('room_type_name', room_type_name);

		state.selectedFiles.forEach(element => {
			console.log(element);
		});
		for (let index = 0; index < state.selectedFiles.length; index++) {
			formData.append('filename['+index+']', state.selectedFiles[index]);
			
		}
        
		formData.append('layout', layout.file);

		console.log(formData);

		axios({
			method: "post",
			url: "http://localhost:8000/api/my-office/create",
			data: formData,
			headers: { 
				"Content-Type": "multipart/form-data",
				Authorization: `Bearer ${JWT_HEADER}`
		
			},
		})
			.then((res) => {
				console.log(res.data)
				// window.location = "/ownersroom	";
			})
			.catch((err) => {
				// console.log(err.response.data);
				window.location = "/colorize";
				setLoading(false);
			});
		};

    return(
		<div class="fixed-nav sticky-footer" id="page-top" >
			<Navbar />
				<div class="content-wrapper" style={{backgroundColor: '#707070'}}>
						<div class="box_general padding_bottom">

								<div class="box_general padding_bottom">
									<div class="header_box version_2">
										<h2><i class="fa fa-image"></i>Galleries</h2>
									</div>
									<div class="row">
										<div class="col-md-12">
											<h6>Image</h6>
											<table id="pricing-list-container" style={{width:`100%`}}>
												<tr class="pricing-list-item">
													<td>
														<div class="form-group">
																<div class="row" >
																	<div class="col-md-4">
																		<input 
																			type="file" 
																			name="filename"
																			multiple accept="image/*"
																			class="form-control" 
																			placeholder="filename"
																			onChange={event => handleChangeInput6(event)}
																		/>
																	</div>
																	
																	
																</div>		
														</div>
													</td>
												</tr>
											</table>
										</div>
									</div>
									
								</div>
					
								<div class="box_general padding_bottom">
									<div class="header_box version_2">
										<h2><i class="fa fa-building"></i>Room Type</h2>
									</div>
									<div class="form-group">
										<div class="row">
											<div class="col-md-6">
												<label>Type</label>
												<input 
													type="text" 
													class="form-control"
													value={room_type_name}
													onChange={(e) => {
														setRoomTypeName(e.target.value);
													}}
												/>
											</div>

											<div class="col-md-2">
												
												<label>Capacity</label>
												<input 
													type="number" 
													class="form-control"
													value={capacity}
													onChange={(e) => {
														setCapacity(e.target.value);
													}}
												/>
												
											</div>

											<div class="col-md-6">
												
												<label>Layout</label>
												<input 
													type="file" 
													name="layout"
													class="form-control" 
													placeholder="layout"
													onChange={event => layoutChange(event)}
												/>
												
											</div>

										</div>
										
									</div>
								
										
								</div>

                                
						
								<p><button  
								disabled={loading}
								className="btn_1 medium"
								variant="primary"
								block
								onClick={_onSubmit}>Create Office
								</button></p>
						</div>
					
					</div>

					{/* < FooterOwner /> */}
				
					<a class="scroll-to-top rounded" href="#page-top">
						<i class="fa fa-angle-up"></i>
					</a>

				
			</div>
	);
}
    
    
export default Colorize;