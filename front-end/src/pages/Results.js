import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { GET_ROOMS, STORAGE_URL } from '../constants/urls';
import { ImageGroup, Image } from 'react-fullscreen-image'

function Results() {


    const [results, setResults] = React.useState({results: []});
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        await axios
          .get(GET_ROOMS(), {
            headers: {},
          })
          .then((res) => {
            console.log(res.data);
            setResults(res.data);
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
        <div id="page">		
            <Navbar />
            <div>
                <section class="hero_in hotels">
                    <div class="wrapper">
                        <div class="container">
                            <h1 class="fadeInUp"><span></span>Colorization Results</h1>
                        </div>
                    </div>
                </section>
                
                
                <div class="collapse" id="collapseMap">
                    <div id="map" class="map"></div>
                </div>
            
        
                <div class="container margin_60_35">
                    {results.results.map(item => (
                        <div class="box_list">
                            <div class="row no-gutters">
                                <div class="col-lg-5">
                                    <figure>

                                        {/* <small>{item.colorization_id}</small> */}
                                        <Link to={{
                                            
                                            state: item.colorization_id 
                                        }}><img src={"http://127.0.0.1:8000/storage/" + item.colorless_link} class="img-fluid" alt="" width="768" height="768"/>
                                    
                                        </Link>

                                    </figure>
                                    
                                </div>
                                <div class="col-lg-7">
                                    <figure>

                                        <small>{item.action}</small>
                                        
                                        <Link to={{
                                            
                                            state: item.colorization_id 
                                        }}><img src={"http://127.0.0.1:8000/storage/" + item.colored_link} class="img-fluid" alt="" width="768" height="768"/>
                                    
                                        </Link>

                                    </figure>
                                    
                                </div>
                                
                            </div>
                        </div>
                    ))}
                            
                    {/* <p class="text-center add_top_60"><a href="#0" class="btn_1 rounded">Load more</a></p> */}
                
                </div>
                
            
                
            </div>
            
            <Footer />

        </div>
        
        
        <div id="toTop"></div>
    
    </div>

    );
}
    
    
export default Results;
