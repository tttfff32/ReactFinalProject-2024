import React, { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../api/User.api';
import { getAppointments } from '../api/manager.api';
 import {Manager} from './manager.component'
 import { useNavigate } from "react-router-dom";
 import Logo from '../assets/logo.jpg'

// const Manager=()=>{
    
// }

export const Admin = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const Comparison = async (newManager) => {
        const obgManager = await getUser()
        if (newManager.userName === obgManager.data[0].userName && newManager.password === obgManager.data[0].password)
                navigate('/manager');
            else
                 navigate('/')
               
                

    }
    const checkPassword = (e) => {
        e.preventDefault();
        const manager = { userName, password };
        Comparison(manager);
        
    }
    

    return <div>
    <form name="adminEntrence" onSubmit={(e) => checkPassword(e)}>
        <div className='adminEntrence'>
            <input type="text" placeholder='userName' onChange={e => setUserName(e.target.value)} />
            <input type="text" placeholder='password' onChange={e => setPassword(e.target.value)} />
            <button type="submit" className='buttonF'>login</button>
        </div>
    </form>
    </div>
}