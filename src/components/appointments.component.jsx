
import React, { useReducer, useState, useEffect } from 'react';
import { Outlet, Link, useNavigate, Navigate } from "react-router-dom";
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
        <Outlet />
    </div>
}

export const Appointment = () => {
    const { Appointments, dispatch, loadAppointmen, } = useAppointments();

    const addAppointment = async (Appointment) => {
        dispatch({
            type: 'add',
            newAppointment: Appointment,
        });
    }
    
    const saveAppointment = async () => {
            await createAppointment(Appointments.newAppointmentTypeOfService, Appointments.newAppointmentDate, Appointments.newAppointmentTime, Appointments.newAppointmentName, Appointments.newAppointmentPhone, Appointments.newAppointmentNote);
            loadAppointmen();
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
