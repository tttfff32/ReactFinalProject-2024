import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Appointment } from './components/appointments.component'
import { AppointmentList } from './data/Appointment';
import { UserHome } from './components/userHome.component';
import { AppointmentsProvider } from './context/appointments.context';
import { Manager } from './components/manager.component';
import { Service } from './components/services.component';
import { AppointmentsManagerProvider } from './context/manager.context'
import Logo from './assets/Logo.jpg'

function App() {
  const [usedAppointment, setAppointment] = useState(AppointmentList);
  const [showNewSAppointment, setshowNewSAppointment] = useState(false);

  const addAppiontment = (Appointment) => {
    Appointment.id = usedAppointment[usedAppointment.length - 1].id + 1;
    const newAppointment = [...usedAppointment, Appointment];
    setAppointment(newAppointment);
    setshowNewSAppointment(false);
  }
  return (
    <>
      {showNewSAppointment ? <Appointment addAppiontment={addAppiontment} cancel={setshowNewSAppointment} /> : ''}
      {/* <AppointmentsProvider> */}
      <div className='header' >
        <img src={Logo} className='logo' width="300px" height="150px" /><br />
        <Link to={'/'}><button className='buttonHome'> home</button></Link>
        <Link to={'appointments'}> <button className='buttonHome'> add appointment </button></Link>
        <Link to={'service'}><button className='buttonHome'> Services </button></Link>

        <Link to={'admin'}><button className='buttonHome'> Admin login</button></Link>
      </div>
      <AppointmentsProvider>
        <div>
          <AppointmentsManagerProvider>
            <div>
              <Outlet />
            </div>
          </AppointmentsManagerProvider>
        </div>
      </AppointmentsProvider>

    </>
  )
}
export default App
