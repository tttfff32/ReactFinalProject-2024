import React, { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import { getServices } from '../api/Services.api';
import Screenshot from '../assets/Screenshot.jpg'
import bride2 from '../assets/bride2.jpg'
import photo from '../assets/photo.jpg'

export const Service = () => {

  const [Services, setServices] = useState([]);

  useEffect(() => {
    const toWrite = async () => {
      try {
        const services = await getServices();
        const { data } = services;
        setServices(data);
      }
      catch {
        console.log("error");
      }
    };
    toWrite();
  }, [Services])


  return <div >
    <div className='addAppPageFlex'>
      <div className='services'>
        {Services
          .map((ser) => (
            <p>
              {ser.name}
            </p>
          ))
        }

        </div>
        <div className='imgService'>
          <img src={Screenshot} width={400} height={300}/>
          <img src={bride2} />
          <img src={photo}  width={400} height={300} />
      </div>
       
    </div>

  </div>
}