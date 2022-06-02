import React from 'react';
import { Outlet } from "react-router-dom";
import Sidebar from './Sidebar'

const Dashboard = () => {
  return (
    <div className='d-flex'>
      <Sidebar/>
      <Outlet/>
      
    </div>
  )
}

export default Dashboard