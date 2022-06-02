import React from 'react';
import {  Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logos from '../Images/logos.jpg';
import female from '../Images/female.png';

const LandingPage = () => {
  return (
    <div className='home-bg vh-100'>
        <div>
            <Navbar className='px-4' collapseOnSelect expand="lg" variant="dark">
                
                <Navbar.Brand className='school-name' as={Link} to="/landingPage"><img src={logos} alt="logo" className='me-2'/>QuincySchools</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {/* <Nav className="nav-feat ms-auto gap-5">
                    <Nav.Link as={Link} to="/About">About</Nav.Link>
                    <Nav.Link as={Link} to="/Courses">Courses</Nav.Link>
                    <Nav.Link as={Link} to="/Instructors">Instructors</Nav.Link>
                    <Nav.Link as={Link} to="/News">News</Nav.Link>
                    <Nav.Link as={Link} to="/Pricing">Pricing</Nav.Link>
                    </Nav> */}
                    <Nav className='ms-auto' as={Link} to="/login">
                    <button className='nav-button px-4 py-1 text-white'>Sign In</button>
                    </Nav>
                </Navbar.Collapse>
                
            </Navbar>
        </div>
        <div className='d-flex'>
            <div className='center-txt text-white'>
                <h2 className='fs-1 fw-bold text-center'>
                <span className='center-text1'>Learn</span>
                <span> on your <br></br>class</span>
                <span className='center-text3'> schedule</span></h2>
                <p  className='pt-3'>Lorem ipsum dolor sit amet, elit. 
                    Sequi quas cumque accusamus earum dolorem necessitatibus 
                    .</p>
            </div>
            <div className='female-img d-md-block d-none'>
                <img src={female} alt="female-pix" className='img-fluid'/>    
            </div>
        </div>
    </div>
  )
}

export default LandingPage