import React from 'react';
import axios from 'axios';
import { GET_HOME, STORAGE_URL } from '../constants/urls';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Dashboard() {

    const [list, setRooms] = React.useState({rooms: []});
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        await axios
          .get(GET_HOME(), {
            headers: {},
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
        
    <div class="datepicker_mobile_full">
        <Navbar currentPage='Dashboard'/>
        <div id="page">    
        
        <div>
            <section class="hero_single version_2">
                <div class="wrapper">
                    <div class="container">
                        <h3>Otak Kanan Office</h3>
                        <p>Get Room Without Waste Your Time</p>
                    </div>
                </div>
            </section>
            
    
            <div class="container container-custom margin_80_0">
                <div class="main_title_2">
                    <span><em></em></span>
                    <h2>Our Newest Rooms</h2>
                    <p>Get the newest rooms here</p>
                </div>

                <section class="add_bottom_45">
                    <div class="row">
                        {list.rooms.map(item => (
                            <div class="col-xl-3 col-lg-6 col-md-6">
                            <Link to={`/roomdetail/${item.id}`} class="grid_item">
                            <figure>
                                <img src={STORAGE_URL + item.filename} class="img-fluid" alt="" width="400" height="267"/>
                                <div class="info">
                                    <h3>{item.name}</h3>
                                </div>
                            </figure>
                            </Link>
                          </div>

                        ))}
                        
                    </div>
                    
                    <Link to="/roomlist"><strong>View all<i class="arrow_carrot-right"></i></strong></Link>
                </section>
            </div>            
        </div>
        
        <Footer />
        
        </div>
        
        <div id="toTop"></div>
        
    </div>
    );
}


export default Dashboard;
