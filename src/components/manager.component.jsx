import React, { useState,  } from 'react';
import { Outlet, Link, useNavigate, NavLink } from 'react-router-dom';
import { useAppointments } from '../context/manager.context';
import { deleteAppointment, updateAppointment } from '../api/manager.api';

 const Edit=({Appointment})=>{

  const { AppointmenstList, dispatch, loadAppointments } = useAppointments();
  
  const [typeOfService, setNewAppointmentTypeOfService] = useState(Appointment.typeOfService);
  const [Date, setNewAppointmentDate] = useState(Appointment.Date);
  const [Time, setNewAppointmentTime] = useState(Appointment.Time);
  const [NameOfUser, setNewAppointmentName] = useState(Appointment.NameOfUser);
  const [PhoneOfUser, setNewAppointmentPhone] = useState(Appointment.PhoneOfUser);
  const [Note, setNewAppointmentNote] = useState(Appointment.Note);


  const editAppiontment = (e) => {
      e.preventDefault();
      const newA = {typeOfService, Date,Time, NameOfUser, PhoneOfUser,Note, };
      saveAppointment(Appointment , newA);
  }

  const saveAppointment = async (Appointment, newValue) => {
      await updateAppointment(Appointment.id, newValue.typeOfService, newValue.Date, newValue.Time, newValue.NameOfUser, newValue.PhoneOfUser, newValue.Note);
      loadAppointments();
    }
  return <div className='editPage'>
  <form name="upAppointment" onSubmit={(e) => editAppiontment(e)}>
      <div className='formEdit' >
          <label> type Of Service: </label>
          <br />
          <br />
          <select  onChange={e => setNewAppointmentTypeOfService(e.target.value)}  defaultValue={Appointment.typeOfService}>
              <option value="BridalBouquet" >Bridal bouquet</option>
              <option value="engagementBouquet">engagement bouquet</option>
              <option value="classicBouquet">A classic bouquet</option>
          </select><br />
          <br />
          <br />
          <label>Date And Time</label><br />
          <br />
          <input type="date" name="DateAndTime" onChange={e => setNewAppointmentDate(e.target.value)}  defaultValue={Appointment.Date}/><br />
          <br />
          <input type="time" name="DateAndTime" onChange={e => setNewAppointmentTime(e.target.value)}  defaultValue={Appointment.Time}/><br />
          <br />
          <label>Name:</label><br />
          <input type="text" onChange={e => setNewAppointmentName(e.target.value)}  defaultValue={Appointment.NameOfUser}/> <br />
          <br />
          <label>Phone:</label><br />
          <input type="text" onChange={e => setNewAppointmentPhone(e.target.value)}  defaultValue={Appointment.PhoneOfUser}/> <br />
          <br />
          <label>Note:</label><br />
          <input type="text" onChange={e => setNewAppointmentNote(e.target.value)}  defaultValue={Appointment.Note} /> <br />
      </div>
      <br /><br />

      <button type="submit" className='buttonF' >press to update</button>
    <button className='buttonF' > cancel </button> 

  </form>
  <Outlet />
</div>
}

export const Manager = () => {

  const { AppointmenstList, dispatch, loadAppointments } = useAppointments();


  const deleteApp = (id) => {
    debugger
    dispatch({
      type: 'delete',
      id: id
    })
  }
  const saveDeleteAppointment = async (appointment) => {
    debugger
    await deleteAppointment(appointment.id);
    loadAppointments()

  }
  const updateUser = (id) => {
    dispatch({
      type: 'edit',
      id: id,
    });

  }

  const handleDelete = (id) => {
    saveDeleteAppointment(id);
  }

  return <div >
    <ul className='listAppointments'>
      {AppointmenstList
        .map((appointment) => (

          <li className='liApp'>
            <div>{`Type of service : ${appointment.typeOfService}`}</div>  
            <div>{`Date : ${appointment.Date}`}</div>
            <div>{`Time :      ${appointment.Time}`} </div>
            <div>{`Name :     ${appointment.NameOfUser}`}</div>   
            <div>{`Phone :    ${appointment.PhoneOfUser}`}</div>   
            <div>{`Note :      ${appointment.Note}`}</div>
            {appointment.edit && <Edit Appointment={appointment}/> }
            {appointment.delete &&  handleDelete(appointment)}
            <button onClick={() => deleteApp(appointment.id)} className='buttonF'>delete Appointment</button>
            <button onClick={() => updateUser(appointment.id)} className='buttonF'>edit Appiontment</button>
          </li>
        ))
      }
    </ul>
    <div>
      <Outlet />
    </div>
  </div>
}
