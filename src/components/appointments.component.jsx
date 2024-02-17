
import React, { useReducer, useState} from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAppointments } from '../context/appointments.context';
import { createAppointment, deleteAppointment, updateAppointment } from '../api/Appointments.api';
import { AppointmentList as initialAppointment } from '../data/Appointment'
import { AppointmentReducer } from '../context/appointment.reducer';
import { AppointmentsProvider } from '../context/appointments.context'
import { Service } from './services.component'
import Logo from '../assets/logo.jpg'



const AddAppointment = ({ add }) => {
    const navigate = useNavigate();
    const [newAppointmentTypeOfService, setNewAppointmentTypeOfService] = useState('');
    const [newAppointmentDate, setNewAppointmentDate] = useState('');
    const [newAppointmentTime, setNewAppointmentTime] = useState('');
    const [newAppointmentName, setNewAppointmentName] = useState('');
    const [newAppointmentPhone, setNewAppointmentPhone] = useState('');
    const [newAppointmentNote, setNewAppointmentNote] = useState('');

    const addAppiontment = (e) => {
        e.preventDefault();
        const newA = { newAppointmentTypeOfService, newAppointmentDate, newAppointmentTime, newAppointmentName, newAppointmentPhone, newAppointmentNote, };
        add(newA);
        navigate('/');
    }

    return <div className='appointmentPage'>
    {/* <div className='header'>
    <img  src={Logo} className='logo'width="300px" height="150px" /><br />
        <Link to={'/'}><button  className='buttonHome'> home</button></Link>
      <Link to={''}> <button className='buttonHome'> add appointment </button></Link>
      <Link to={'/'}><button  className='buttonHome'>admin login</button></Link>
  </div> */}
  <div className='addAppPageFlex'>
    <form name="newAppointment" onSubmit={(e) => addAppiontment(e)}>
        <div className='formApp' >
            <label> type Of Service: </label>
            <br />
            <br />
            <select onChange={e => setNewAppointmentTypeOfService(e.target.value)}>
                <option value="BridalBouquet">Bridal bouquet</option>
                <br />
                <option value="engagementBouquet">engagement bouquet</option>
                <br />
                <option value="classicBouquet">A classic bouquet</option>
            </select><br />
            <br />
            <br />
            <label>Date And Time</label><br />
            <br />
            <input type="date" name="DateAndTime" onChange={e => setNewAppointmentDate(e.target.value)} /><br />
            <br />
            <input type="time" name="DateAndTime" onChange={e => setNewAppointmentTime(e.target.value)} /><br />
            <br />
            <label>Name:</label><br />
            <input type="text" onChange={e => setNewAppointmentName(e.target.value)} /> <br />
            <br />
            <label>Phone:</label><br />
            <input type="text" onChange={e => setNewAppointmentPhone(e.target.value)} /> <br />
            <br />
            <label>Note:</label><br />
            <input type="text" onChange={e => setNewAppointmentNote(e.target.value)} /> <br />
        </div>
        <br /><br />
        <button type="submit" className='buttonF' >press to buy</button>
        <Link to={"/"}> <button className='buttonF' > cancel </button></Link>
        
    </form>
    <Outlet/>
    </div>
    </div>
}

export const Appointment = () => {
    const [AppointmentList, dispatch] = useReducer(AppointmentReducer, initialAppointment);


    const addAppointment = async (Appointment) => {
        await createAppointment(Appointment.newAppointmentTypeOfService, Appointment.newAppointmentDate, Appointment.newAppointmentTime, Appointment.newAppointmentName, Appointment.newAppointmentPhone, Appointment.newAppointmentNote);
        dispatch({
            type: 'add',
            newAppointment: Appointment,

        })

    }

    const removeAppointment = async (Appointment) => {
        await deleteAppointment(Appointment.id);
        dispatch({
            type: 'add',
            removeAppointment: Appointment,

        })
    }

    const editAppointment = (Appointment) => {
        dispatch({
            type: 'edit',
            id: Appointment.id,
        });
    }

    const saveAppointment = async (Appointment, newValue) => {
        await updateAppointment(Appointment.id, newValue);
        loadAppointment();
    }

    return <div>
        {/* {!canAdd && <button onClick={() => setCanAdd(!canAdd)}>
            Add Appointment
        </button>} */}
        {/* <Service/> */}
        {<AddAppointment add={addAppointment} />}
        <ul>
            {/* {AppointmentList.map(appointment => <li key={appointment.id}>
                {appointment.edit && <input onBlur={e => saveAppointment(appointment, e.target.value)} defaultValue={appointment.appointment} />}
                {!appointment.edit && <Link to={'/appointments/' + appointment.id}> {appointment.appointment} </Link>}
                <button onClick={() => removeAppointment(appointment)}>Delete</button>
                <button onClick={() => editAppointment(appointment)}>Edit</button>
            </li>)} */}
        </ul>
        <div>

            <Outlet />
        </div>
    </div>

}
