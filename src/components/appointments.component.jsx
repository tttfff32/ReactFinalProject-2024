
import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAppointments } from '../context/appointments.context';
import { createAppointment} from '../api/Appointments.api';

const AddAppointment = ({ add }) => {

    const [newAppointmentTypeOfService, setNewAppointmentTypeOfService] = useState('BridalBouquet');
    const [newAppointmentDate, setNewAppointmentDate] = useState('');
    const [newAppointmentTime, setNewAppointmentTime] = useState('');
    const [newAppointmentName, setNewAppointmentName] = useState('');
    const [newAppointmentPhone, setNewAppointmentPhone] = useState('');
    const [newAppointmentNote, setNewAppointmentNote] = useState('');

    const addAppiontment = (e) => {
        e.preventDefault();
        const newA = { newAppointmentTypeOfService, newAppointmentDate, newAppointmentTime, newAppointmentName, newAppointmentPhone, newAppointmentNote, };
        add(newA);
    }
    

    return <div className='appointmentPage'>
        <form name="newAppointment" onSubmit={(e) => addAppiontment(e)}>
            <div className='formApp' >
                <label> type Of Service: </label>
                <br />
                <br />
                <select  onChange={e => setNewAppointmentTypeOfService(e.target.value)} >
                    <option value="BridalBouquet" >Bridal bouquet</option>
                    <option value="engagementBouquet">engagement bouquet</option>
                    <option value="classicBouquet">A classic bouquet</option>
                </select><br />
                <br />
                <br />
                <label>Date And Time</label><br />
                <br />
                <input type="date" name="DateAndTime" onChange={e => setNewAppointmentDate(e.target.value)} required /><br />
                <br />
                <input type="time" name="DateAndTime" onChange={e => setNewAppointmentTime(e.target.value)} required/><br />
                <br />
                <label>Name:</label><br />
                <input type="text" onChange={e => setNewAppointmentName(e.target.value)} required/> <br />
                <br />
                <label>Phone:</label><br />
                <input type="text" onChange={e => setNewAppointmentPhone(e.target.value)} required/> <br />
                <br />
                <label>Note:</label><br />
                <input type="text" onChange={e => setNewAppointmentNote(e.target.value)} required /> <br />
            </div>
            <br /><br />

            <button type="submit" className='buttonF' >press to buy</button>
            <Link to={"/"}> <button className='buttonF' > cancel </button></Link>

        </form>
        <Outlet />
    </div>
}

export const Appointment = () => {
    const { Appointments, dispatch } = useAppointments();
    const navigate = useNavigate();

    const addAppointment = async (Appointment) => {
        dispatch({
            type: 'add',
            newAppointment: Appointment,
        });
    }
    
    const saveAppointment = async () => {
            await createAppointment(Appointments.newAppointmentTypeOfService, Appointments.newAppointmentDate, Appointments.newAppointmentTime, Appointments.newAppointmentName, Appointments.newAppointmentPhone, Appointments.newAppointmentNote);
            navigate('/');
    }

    return <div>

        {<AddAppointment add={addAppointment} />}
        {Appointments.add && saveAppointment()}
        {!Appointments.add && <Link to={'appointments'}> </Link>}

        <div>
            <Outlet />
        </div>
    </div>
}
