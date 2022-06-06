import React from 'react';
import reads from '../Images/reads.png';
import { Row, Col } from "react-bootstrap";

const DashboardItem = () => {
  const user = localStorage.getItem('user');
  return (
    <Row className='green-bg px-4 text-white'>
        <Col md={6} sm={12} className=' align-self-center flex-column'>
          <h2 className='Dash-font fw-bold'>Welcome <br></br>{user? user: localStorage.getItem("name")}</h2>
          <p>Starts on 5th Dec 2022</p>
          <button className='border-0 rounded-pill green-txt mt-4 py-2 px-2 blu-bg dash-btn'>Start Learning</button>
        </Col>
        <Col md={6} sm={12} className='dash-img align-self-center  d-md-block d-none'>
          <img src={reads} alt="female_reading" className='img-fluid' />
        </Col>
  </Row>
  )
}

export default DashboardItem