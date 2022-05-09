import React from 'react'
import coat_of_arm from '../Images/coat_of_arm.jpg';
import dume from '../Images/dume.JPG';
import { Container, Navbar, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import FormPage from './FormPage';
// import ContactForm from './ContactForm';


const Contact = () => {
  return (
    <>
        <div className='logo '>
            <Container>
                <div className='d-flex '>
                    <img src={coat_of_arm} alt="logo"  />
                    <div className='ps-2'>
                        <h6 className='pt-3 logo-text1'>Nigeria</h6>
                        <h5 className='logo-text'>deparment of justice</h5>
                    </div>
                </div>
                <h2 className='head-text py-2'>National sex offenders public website</h2>
            </Container>
        </div>
        <div className='nav-sec'>
            <Navbar collapseOnSelect expand="lg"  variant="dark">
                <Container>
                <Navbar.Brand as={Link} to="/Contact">Contact</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/About">About NSOPW</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#facebook">Facebook</Nav.Link>
                    <Nav.Link eventKey={2} href="#twitter">
                        Twitter
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        <div  className='text-center bg-white'>
            <Container>
                <div className='contact-img text-center pt-5'><img src={dume} alt="img" /></div>
                <div className='py-5'><h5>PLEASE SUBMIT YOUR REQUEST USING THE FOLLOWING FORM 
                    AND YOU WILL RECEIVE A RESPONSE WITHIN 2 BUSINESS DAYS. 
                    ALL FIELDS ARE REQUIRED.</h5>
                </div>
                <div>
                    <FormPage/>
                    {/* <ContactForm/> */}
                </div>
            </Container>
        </div>
        <footer className='text-center text-white'>
            <p>All rights reserved 2022(c)</p>
        </footer>
    </>
  )
}

export default Contact