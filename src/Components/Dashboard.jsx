import React from 'react';
import { Outlet } from "react-router-dom";
import Sidebar from './Sidebar'
// import Wrapper from './Wrapper';

const Dashboard = () => {
  return (
    <div className='d-flex'>
      <Sidebar/>
      <Outlet/>
      
    </div>
  )
}

export default Dashboard