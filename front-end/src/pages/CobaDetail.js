import React from 'react';
import axios from 'axios';
import { GET_DETAIL_ROOM, JWT_HEADER } from '../constants/urls'
import { Link } from 'react-router-dom';
import { useParams } from "react-router";



const CobaDetail = () => {
    const [room, setRoom] = React.useState({detail_room: {}});
    const [isLoading, setIsLoading] = React.useState(true);

    
    let { room_id } = useParams();
    //console.log(room_id);

    React.useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        await axios
          .get(GET_DETAIL_ROOM(room_id), {
            headers: {},
          })
          .then((res) => {
            console.log(res.data);
            setRoom(res.data);
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

                <li key={room.detail_room.id}>
                    <p>{room.detail_room.name}</p>
                    <p>Alhamdulillah</p>
                </li>
            </ul>
            
        </div>
        
       
      
    );
    
};


export default CobaDetail;