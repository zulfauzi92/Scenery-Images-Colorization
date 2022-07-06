import React from 'react';
import Navbar from '../components/NavbarOwner';
import FooterOwner from '../components/FooterOwner';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import axios from "axios";
import { JWT_HEADER } from "../constants/urls";

function CreateNewOffice() {

	const [loading, setLoading] = React.useState(false);
	

	const [name, setName] = React.useState("");
	const [address, setAddress] = React.useState("");
	const [description, setDescription] = React.useState("");
	const [latitude, setLatitude] = React.useState("");
	const [longitude, setLongitude] = React.useState("");
	const [capacity, setCapacity] = React.useState("");
	const [layout, setLayout] = React.useState(
		{file:undefined}
	);
	const [room_type_name, setRoomTypeName] = React.useState("");
	
	const[facility, setFacility] = React.useState([
		{facility_name: '', facility_status: ''}
	])
	
	
	const handleChangeInput = (index, event) => {
		console.log(index, event.target.name)
		const values = [...facility];
		values[index][event.target.name] = event.target.value
		setFacility(values);
	}
	const handleAddFields = () => {
		setFacility([...facility, {facility_name: '', facility_status: ''}])
	}
	const handleRemoveFields = (index) => {
		const values = [...facility];
		values.splice(index, 1);
		setFacility(values);
	}

	const[operational_times, setOperationalTimes] = React.useState([
		{day: '', open_times: '', close_times: ''}
	])

	const handleChangeInput2 = (index, event) => {
		console.log(index, event.target.name)
		const values = [...operational_times];
		values[index][event.target.name] = event.target.value
		setOperationalTimes(values);
	}
	const handleAddFields2 = () => {
		setOperationalTimes([...operational_times, {day: '', open_times: '', close_times: ''}])
	}
	const handleRemoveFields2 = (index) => {
		const values = [...operational_times];
		values.splice(index, 1);
		setOperationalTimes(values);
	}

	const[room_function, setRoomFunction] = React.useState([
		{function_name: ''}
	])
	
	
	const handleChangeInput3 = (index, event) => {
		console.log(index, event.target.name)
		const values = [...room_function];
		values[index][event.target.name] = event.target.value
		setRoomFunction(values);
	}
	const handleAddFields3 = () => {
		setRoomFunction([...room_function, {function_name: ''}])
	}
	const handleRemoveFields3 = (index) => {
		const values = [...room_function];
		values.splice(index, 1);
		setRoomFunction(values);
	}

	const[regulation, setRegulation] = React.useState([
		{regulation_name: ''}
	])
	
	
	const handleChangeInput4 = (index, event) => {
		console.log(index, event.target.name)
		const values = [...regulation];
		values[index][event.target.name] = event.target.value
		setRegulation(values);
	}
	const handleAddFields4 = () => {
		setRegulation([...regulation, {regulation_name: ''} ])
	}
	const handleRemoveFields4 = (index) => {
		const values = [...regulation];
		values.splice(index, 1);
		setRegulation(values);
	}

	const[category_price, setCategoryPrice] = React.useState([
		{price_name: '', price: ''}
	])
	
	
	const handleChangeInput5 = (index, event) => {
		console.log(index, event.target.name)
		const values = [...category_price];
		values[index][event.target.name] = event.target.value
		setCategoryPrice(values);
	}
	const handleAddFields5 = () => {
		setCategoryPrice([...category_price, {price_name: '', price: ''} ])
	}
	const handleRemoveFields5 = (index) => {
		const values = [...category_price];
		
		values.splice(index, 1);
		setCategoryPrice(values);
	}


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
		const facility_name = facility.map(
			x => x.facility_name
		);
		const facility_status = facility.map(
			x2 => x2.facility_status
		);
		const day = operational_times.map(
			x3 => x3.day
		);
		const open_times = operational_times.map(
			x4 => x4.open_times
		);
		const close_times = operational_times.map(
			x5 => x5.close_times
		);

		const function_name = room_function.map(
			x6 => x6.function_name
		);

		const regulation_name = regulation.map(
			x7 => x7.regulation_name
		);

		const category_price_name = category_price.map(
			x8 => x8.price_name
		);

		const price = category_price.map(
			x9 => x9.price
		);

		
		
		console.log(name);
		console.log(address);
		console.log(latitude);
		console.log(longitude);
		console.log(description);
		console.log(facility_name);
		console.log(facility_status);
		console.log(day);
		console.log(open_times);
		console.log(close_times);
		console.log(function_name);
		console.log(regulation_name);
		console.log(category_price_name);
		console.log(price);
		
		console.log(state.selectedFiles);
		console.log(length);
		console.log(layout.file);
		console.log(JWT_HEADER);

		

		var formData = new FormData();
		formData.append('name', name);
		formData.append('address', address);
		formData.append('description', description);
		formData.append('latitude', latitude);
		formData.append('longitude', longitude);
		formData.append('capacity', capacity);
		formData.append('room_type_name', room_type_name);

		
		
		for (let index = 0; index < function_name.length; index++) {
			formData.append('room_function_name[' +index+']', function_name[index]);
			
		}
		// state.selectedFiles.forEach(element => {
		// 	console.log(element);
		// });
		for (let index = 0; index < state.selectedFiles.length; index++) {
			formData.append('filename['+index+']', state.selectedFiles[index]);
			
		}

		for (let index = 0; index < facility_name.length; index++) {
			formData.append('facility_name[' +index+']', facility_name[index]);
			
		}

		for (let index = 0; index < facility_status.length; index++) {
			formData.append('facility_status[' +index+']', facility_status[index]);
			
		}

		for (let index = 0; index < regulation_name.length; index++) {
			formData.append('regulation_name[' +index+']', regulation_name[index]);
			
		}

		for (let index = 0; index < day.length; index++) {
			formData.append('day[' +index+']', day[index]);
			
		}

		for (let index = 0; index < open_times.length; index++) {
			formData.append('open_times[' +index+']', open_times[index]);
			
		}

		for (let index = 0; index < close_times.length; index++) {
			formData.append('close_times[' +index+']', close_times[index]);
			
		}

		for (let index = 0; index < category_price_name.length; index++) {
			formData.append('category_price_name[' +index+']', category_price_name[index]);
			
		}

		for (let index = 0; index < price.length; index++) {
			formData.append('price[' +index+']', price[index]);
			
		}
		formData.append('layout', layout.file);

		//console.log(formData);

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
				window.location = "/ownersroom	";
			})
			.catch((err) => {
				console.log(err.response.data);
				window.location = "/createoffice";
				setLoading(false);
			});
		};

    return(
		<div class="fixed-nav sticky-footer" id="page-top" >
			<Navbar />
				<div class="content-wrapper" style={{backgroundColor: '#707070'}}>
						<div class="container-fluid">
								
						<div class="box_general padding_bottom">
									<div class="header_box version_2">
										<h2><i class="fa fa-file"></i>Basic Info</h2>
									</div>
									<div class="form-group">
										<div class="row">
											<div class="col-md-6">
												<label>Room Name</label>
												<input 
													type="text" 
													class="form-control"
													value={name}
													onChange={(e) => {
														setName(e.target.value);
													}}
												/>
											</div>

											<div class="col-md-12">
												
												<label>Description</label>
												<textarea 
													type="text" 
													class="form-control"
													value={description}
													onChange={(e) => {
														setDescription(e.target.value);
													}}
												/>
												
											</div>

											

										</div>
										
									</div>
								
										
								</div>
					
						
								<div class="box_general padding_bottom">
									<div class="header_box version_2">
										<h2><i class="fa fa-map-marker"></i>Location</h2>
									</div>
									<div class="form-group">
										<div class="row">
											<div class="col-md-6">
												<label>Address</label>
												<input 
													type="text" 
													class="form-control"
													value={address}
													onChange={(e) => {
														setAddress(e.target.value);
													}}
												/>
											</div>

											<div class="col-md-2">
												
												<label>Latitude</label>
												<input 
													type="number" 
													class="form-control"
													value={latitude}
													onChange={(e) => {
														setLatitude(e.target.value);
													}}
												/>
												
											</div>

											<div class="col-md-2">
												
												<label>Longitude</label>
												<input 
													type="number" 
													class="form-control"
													value={longitude}
													onChange={(e) => {
														setLongitude(e.target.value);
													}}
												/>
												
											</div>

										</div>
										
									</div>
								
										
								</div>

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

								<div class="box_general padding_bottom">
									<div class="header_box version_2">
										<h2><i class="fa fa-check-circle"></i>Room Function</h2>
									</div>
									<div class="row">
										<div class="col-md-12">
											<h6>Function</h6>
											<table id="pricing-list-container" style={{width:`100%`}}>
												<tr class="pricing-list-item">
													<td>
														<div class="form-group">
															{room_function.map((inputField, index) => (
																<div class="row" key={index}>
																<div class="col-md-4">
																	<input 
																		name="function_name"
																		type="text" 
																		class="form-control" 
																		placeholder="Name"
																		value={inputField.function_name}
																		onChange={event => handleChangeInput3(index, event)}
																	/>
																</div>
																
																<div class="col-md-2">
																	<IconButton onClick={() => handleRemoveFields3(index)}>
																		<RemoveIcon />
																	</IconButton>
																</div>
																</div>
															)) }
															
														</div>
													</td>
												</tr>
											</table>
											<button class="btn_1 gray add-pricing-list-item" onClick={() => handleAddFields3()}><i class="fa fa-fw fa-plus-circle"></i>Add Item</button>
										</div>
									</div>
									
								</div>

								<div class="box_general padding_bottom">
									<div class="header_box version_2">
										<h2><i class="fa fa-book"></i>Common Regulations</h2>
									</div>
									<div class="row">
										<div class="col-md-12">
											<h6>Rules</h6>
											<table id="pricing-list-container" style={{width:`100%`}}>
												<tr class="pricing-list-item">
													<td>
														<div class="form-group">
															{regulation.map((inputField, index) => (
																<div class="row" key={index}>
																<div class="col-md-4">
																	<input 
																		name="regulation_name"
																		type="text" 
																		class="form-control" 
																		placeholder="Name"
																		value={inputField.regulation_name}
																		onChange={event => handleChangeInput4(index, event)}
																	/>
																</div>
																
																<div class="col-md-2">
																	<IconButton onClick={() => handleRemoveFields4(index)}>
																		<RemoveIcon />
																	</IconButton>
																</div>
																</div>
															)) }
															
														</div>
													</td>
												</tr>
											</table>
											<button class="btn_1 gray add-pricing-list-item" onClick={() => handleAddFields4()}><i class="fa fa-fw fa-plus-circle"></i>Add Item</button>
										</div>
									</div>
									
								</div>

								<div class="box_general padding_bottom">
									<div class="header_box version_2">
										<h2><i class="fa fa-tv"></i>Facility</h2>
									</div>
									<div class="row">
										<div class="col-md-12">
											<h6>Item</h6>
											<table id="pricing-list-container" style={{width:`100%`}}>
												<tr class="pricing-list-item">
													<td>
														<div class="form-group">
															{facility.map((inputField, index) => (
																<div class="row" key={index}>
																<div class="col-md-4">
																	<input 
																		name="facility_name"
																		type="text" 
																		class="form-control" 
																		placeholder="Name"
																		value={inputField.facility_name}
																		onChange={event => handleChangeInput(index, event)}
																	/>
																</div>
																<div class="col-md-2">
																	<input 
																		name="facility_status"
																		type="text" 
																		class="form-control" 
																		placeholder="Status"
																		value={inputField.facility_status}
																		onChange={event => handleChangeInput(index, event)}
																	/>
																</div>
																<div class="col-md-2">
																	<IconButton onClick={() => handleRemoveFields(index)}>
																		<RemoveIcon />
																	</IconButton>
																</div>
																</div>
															)) }
															
														</div>
													</td>
												</tr>
											</table>
											<button class="btn_1 gray add-pricing-list-item" onClick={() => handleAddFields()}><i class="fa fa-fw fa-plus-circle"></i>Add Item</button>
											</div>
									</div>
									
								</div>

								<div class="box_general padding_bottom">
									<div class="header_box version_2">
										<h2><i class="fa fa-clock-o"></i>Operational Times</h2>
									</div>
									<div class="row">
										<div class="col-md-12">
											<h6>Item</h6>
											<table id="pricing-list-container" style={{width:`100%`}}>
												<tr class="pricing-list-item">
													<td>
														<div class="form-group">
															{operational_times.map((inputField, index) => (
																<div class="row" key={index}>
																
																<div class="col-md-2">
																	<input 
																		name="day"
																		type="text" 
																		class="form-control" 
																		placeholder="Day"
																		value={inputField.day}
																		onChange={event => handleChangeInput2(index, event)}
																	/>
																</div>

																<div class="col-md-2">
																	<input 
																		name="open_times"
																		type="time" 
																		class="form-control" 
																		placeholder="Open Times"
																		value={inputField.open_times}
																		onChange={event => handleChangeInput2(index, event)}
																	/>
																</div>

																<div class="col-md-2">
																	<input 
																		name="close_times"
																		type="time" 
																		class="form-control" 
																		placeholder="Close Times"
																		value={inputField.close_times}
																		onChange={event => handleChangeInput2(index, event)}
																	/>
																</div>
																<div class="col-md-2">
																	<IconButton onClick={() => handleRemoveFields2(index)}>
																		<RemoveIcon />
																	</IconButton>
																</div>
																</div>
															)) }
															
														</div>
													</td>
												</tr>
											</table>
											<button class="btn_1 gray add-pricing-list-item" onClick={() => handleAddFields2()}><i class="fa fa-fw fa-plus-circle"></i>Add Item</button>
											</div>
									</div>
									
								</div>

								
					
						
								<div class="box_general padding_bottom">
									<div class="header_box version_2">
										<h2><i class="fa fa-dollar"></i>Pricing</h2>
									</div>
									<div class="row">
										<div class="col-md-12">
											<h6>Item</h6>
											<table id="pricing-list-container" style={{width:`100%`}}>
												<tr class="pricing-list-item">
													<td>
														<div class="form-group">
															{category_price.map((inputField, index) => (
																<div class="row" key={index}>
																<div class="col-md-4">
																	<input 
																		name="price_name"
																		type="text" 
																		class="form-control" 
																		placeholder="Title"
																		value={inputField.price_name}
																		onChange={event => handleChangeInput5(index, event)}
																	/>
																</div>
																<div class="col-md-2">
																	<input 
																		name="price"
																		type="number" 
																		class="form-control" 
																		placeholder="Price"
																		value={inputField.price}
																		onChange={event => handleChangeInput5(index, event)}
																	/>
																</div>
																<div class="col-md-2">
																	<IconButton onClick={() => handleRemoveFields5(index)}>
																		<RemoveIcon />
																	</IconButton>
																</div>
																</div>
															)) }
															
														</div>
													</td>
												</tr>
											</table>
											<button class="btn_1 gray add-pricing-list-item" onClick={() => handleAddFields5()}><i class="fa fa-fw fa-plus-circle"></i>Add Item</button>
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

					< FooterOwner />
				
					<a class="scroll-to-top rounded" href="#page-top">
						<i class="fa fa-angle-up"></i>
					</a>

				
			</div>
	);
}
    
    
export default CreateNewOffice;