import React, { useEffect, useReducer, useContext } from 'react';
import { getAppointments } from '../api/manager.api';
import { AppointmentReducer } from './manager.reducer.js';

const CustomerContext = React.createContext();

// const [_custemersData, setcustomers] = useState(custemersData);
export const useAppointments = () => useContext(CustomerContext);

export const AppointmentsManagerProvider = (params) => {
    const [AppointmenstList, dispatch] = useReducer(AppointmentReducer, []);

    const loadAppointments = async () => {
        const { data } = await getAppointments();
        dispatch({
            type: 'load',
            value: data,
        })
    }

    useEffect(() => {
       loadAppointments();
    }, []);

    const contextValue = {
        AppointmenstList,
        dispatch,
        loadAppointments,
    };
    return <CustomerContext.Provider value={contextValue} >
        { params.children }
    </CustomerContext.Provider>
}











    
 
