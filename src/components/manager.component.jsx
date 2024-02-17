import React, { useEffect, useReducer, useState } from 'react';
import { Outlet,Link } from 'react-router-dom';
import { useAppointments } from '../context/manager.context';
import {AppointmentReducer} from '../context/manager.reducer'
import { getAppointments ,deleteAppointment,updateAppointment} from '../api/manager.api';
import Logo from '../assets/logo.jpg'

export const Manager = () => {
  const { dispatch, loadAppointments } = useAppointments();
  const [AppointmentList, setAppointmentList] = useState([]);

  useEffect(() => {
    const toWrite = async () => {
      try {
        const appointments = await getAppointments();
        const { data } = appointments;
        setAppointmentList(data);
      }
      catch{
        console.log("error");
      }
    };
      toWrite();
  }, [AppointmentList])

  const deleteUser=async (id)=>{
      await deleteAppointment(id); 
  }
  const updateUser=async(appointment)=>{
    // await updateAppointment(id)
    
    dispatch({
      type: 'edit',
      id: appointment.id,
  });
    
  }

  const saveAppointment = async (Appointment, newValue) => {
    await updateAppointment(Appointment.id, newValue.NameOfUser, newValue.PhoneOfUser);
    loadAppointments();
    
  } 

  return <div >
    <div className='header'>
    <img  src={Logo} className='logo'width="300px" height="150px" /><br />
    <Link to={'/'}><button  className='buttonHome'> home</button></Link>
      <Link to={'appointments'}> <button className='buttonHome'> add appointment </button></Link>
      <Link to={'admin'}><button  className='buttonHome'> Admin login</button></Link>
  </div>
    <ul>
    <h1>Appointment List:</h1>
      {AppointmentList
        .map((appointment) => (
          
          <li>
          {appointment.TypeOfService}  |  
           {appointment.Date}   |
           {appointment.Time}   |
           {appointment.NameOfUser}   |
           {appointment.PhoneOfUser}   |
           {appointment.Note}   |
           { appointment.edit && <input onBlur={e => saveAppointment(appointment, e.target.value)} defaultValue={appointment.appointment} /> }
           { !appointment.edit && <Link to={'/appointments/' + appointment.id}> {appointment.appointment} </Link> }
           <button onClick={() => deleteUser(appointment.id)}>x</button>
           <button onClick={() => updateUser(appointment)}>E</button>

           </li>
        ))
      }
    </ul>
    <div>
            
            <Outlet />
        </div>
  </div>

} 