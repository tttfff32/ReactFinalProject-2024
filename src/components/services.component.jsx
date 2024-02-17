import React, { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import { getServices} from '../api/Services.api';
import  engagementbouquet from '../assets/engagementbouquet.jpg'
import  engagementbouquet2 from '../assets/engagementbouquet2.jpg'
import Logo from '../assets/logo.jpg'

export const Service = () => {

  const [Services, setServices] = useState([]);

  useEffect(() => {
    const toWrite = async () => {
      try {
        const services = await getServices();
        const { data } = services;
        setServices(data);
      }
      catch{
        console.log("error");
      }
    };
      toWrite();
  }, [Services])


  return <div >
    <div className='header'>
    <img  src={Logo} className='logo'width="300px" height="150px" /><br />
    <Link to={'/'}><button  className='buttonHome'> home</button></Link>
      <Link to={'appointments'}> <button className='buttonHome'> add appointment </button></Link>
      <Link to={'admin'}><button  className='buttonHome'> Admin login</button></Link>
  </div>
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
    </div>
  </div>
  }