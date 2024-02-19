import React, { useEffect, useReducer, useContext } from 'react';
import { getAppointments } from '../api/Appointments.api';
import { AppointmentReducer } from './appointment.reducer';

const AppointmentContext = React.createContext();

export const useAppointments = () => useContext(AppointmentContext);

export const AppointmentsProvider = (params) => {
    const [Appointments, dispatch] = useReducer(AppointmentReducer, []);

    const loadAppointment = async () => {
        const { data } = await getAppointments();
        dispatch({
            type: 'load',
            value: data,
        })
    }

    useEffect(() => {
       loadAppointment();
    }, []);



    const value = {
        Appointments,
        dispatch,
        loadAppointment,
    };
    
    return <AppointmentContext.Provider value={value} >
        { params.children }
    </AppointmentContext.Provider>
}