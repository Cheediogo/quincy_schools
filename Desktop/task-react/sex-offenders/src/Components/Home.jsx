import React from 'react'
import coat_of_arm from '../Images/coat_of_arm.jpg';
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
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
                <Navbar.Brand as={Link} to="/Home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to="/About">About NSOPW</Nav.Link>
                    <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets">Facebook</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Twitter
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        <div className='map-bg py-3'>
            <Container>      
                <div className='bg-danger text-white'> 
                    <p>The following jurisdictions are offline: <span className='off-sec'>Zamfara</span></p>
                </div>
            </Container>
            <Container className='d-flex'>
                <div className='search-section text-white ps-4 py-5'>
                    <h5>SEARCH NSOPW</h5>
                    <p>
                    Search sex offender registries for all 36 states, 
                    The District of UAR, Border Territories, and 
                    West Africa.
                    </p>
                    <button className='border-0 text-white bg-danger'>Advanced Search</button>
                </div>
                <div className='form-sec ps-4 py-5'>
                <h5 className='text-white'>SEARCH BY NAME</h5>
                <button className='border-0 text-white bg-danger'>Name Search</button>
                </div>
            </Container>
        </div>
        <div className='.bgd-color text-white py-5'>
            <Container><h4 >HOW TO REPORT ABUSE AND GET HELP</h4></Container>
            <Container className='d-lg-flex ' >
                <div>
                    <p>
                    If you know or suspect a child is being sexually 
                    abused, please report it to your local child 
                    protective services. If you are unsure of who to 
                    contact, the Child Welfare Information Gateway 
                    has a list of contacts.
                    </p>
                    <button className='border-0 text-white bg-danger mt-3'>Child Welfare Information Gateway</button>
                </div>
                <div>
                    <p className='para-top'>
                    If you have been sexually assaulted, help is available. 
                    Call your local police or contact the national sexual 
                    assault hotline at 600-656-HOPE (free, confidential, anonymous).
                    </p>
                    <button className='border-0 text-white bg-danger mt-3'>Call 700.876.Hope</button>
                </div>
            </Container>
        </div>
        <div className='py-5 bg-white'>
            <Container>
                <h4>SAFETY AND EDUCATION</h4>
                <p className='pt-2'>
                Sexual abuse and assault can be difficult topics to discuss. 
                Learning about sexual abuse/assault, being able to recognize 
                potential warning signs, knowing how to respond and being aware 
                of resources can help.
                </p>
            </Container>
        </div>
        <footer className='text-center text-white'>
            <p>All rights reserved 2022(c)</p>
        </footer>
    </>
  )
}

export default Home