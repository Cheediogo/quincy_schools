import React from 'react';
import { Outlet } from "react-router-dom";
// import Sidebar from './Sidebar'
import Wrapper from './Wrapper';

const Dashboard = () => {
  return (
    <div className=''>
      <Wrapper/>
      <div className='layout-outlet'>
      <Outlet/>
      </div>
      
      
    </div>
  )
}

export default Dashboard