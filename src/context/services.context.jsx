import React, { useEffect, useReducer, useContext } from 'react';
import { getServices } from '../api/Services.api';
import { ServicesReducer } from './services.reducer';

const ServicesContext = React.createContext();

export const useServices = () => useContext(ServicesContext);



export const ServicesProvider = (params) => {
    const [Services, dispatch] = useReducer(ServicesReducer, []);

    const loadService = async () => {
        const { data } = await getServices();
        dispatch({
            type: 'load',
            value: data,
        })
    }

    useEffect(() => {
       loadService();
    }, []);



    const value = {
        Services,
        dispatch,
        loadService,
    };
    
    return <ServicesContext.Provider value={value} >
        {/* מכיל את החלק שנשלח בתוך הקומפוננטה */}
        { params.children }
    </ServicesContext.Provider>
}