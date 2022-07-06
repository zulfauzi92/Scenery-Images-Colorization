import React from 'react';
import axios from 'axios';
import { GET_ROOMS,JWT_HEADER } from '../constants/urls'
import { Link } from 'react-router-dom';
import { useParams } from "react-router";

function pindah(itemID) {
    console.log(`${itemID} clicked`);
}

const Coba = () => {
    const [list, setRooms] = React.useState({rooms: []});
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
             <ul>
                {list.rooms.map(item => (
                <li key={item.id}>
                    <p>{item.name}</p>
                    <Link to={`/cobadetail/${item.id}`}><button>Detail</button></Link>
                </li>
                ))}
            </ul>
            
        </div>
        
       
      
    );
    
};


export default Coba;