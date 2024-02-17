import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Appointment } from './components/appointments.component.jsx';
import { UserHome } from './components/userHome.component.jsx'
import { Admin } from './components/admin.component.jsx'
import { Manager } from './components/manager.component.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [{
      path: '',
      Component: UserHome,
    },
    {
      path: 'appointments',
      Component: Appointment,
    },
    {
      path: 'admin',
      Component: Admin,
    },
    {
      path: 'manager',
      Component: Manager,
    },
    ],
    errorElement: <p> oops :( not exists... </p>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,

)
