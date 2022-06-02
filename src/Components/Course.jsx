import React from 'react';
import { Container, Navbar, Nav} from "react-bootstrap";

 
  
const Course= () => {
  return (
    <>
    <div  className='d-flex flex-column'>
        <div  className=''>
            <h1>Introduction to Figma Basic</h1>
        </div>
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Overview</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">FAQ</Nav.Link>
                        <Nav.Link href="#action2">Discussion</Nav.Link>
                        <Nav.Link href="#action2">Reviews</Nav.Link>
                    </Nav>
                    <button className='border-0 rounded-pill green-txt mt-4 py-2 px-2 blu-bg dash-btn mb-3'>Become a mentor</button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>    
        <div className='ps-3'>
            <h3 className='bigest-font'>01. Marketing Introduction</h3>
            <p className='small-font text-muted'>Lorem ipsum dolor sit amet consectetur, adipisicing 
               elit. Expedita iure laboriosam necessitatibus 
               perspiciatis adipisci quibusdam! Reprehenderit 
               iure praesentium alias eligendi facilis eum, sit 
               harum soluta aut dicta dolorum officiis at.</p>
        </div>
        <div className='ps-3 big-font'><h5>Marketing tools</h5></div>
        <div className='ps-3 big-font my-2'><h5>Digital Marketing</h5></div>
        <div className='ps-3 big-font mb-2'><h5>How to market for my website</h5></div>
        <div className='ps-3 big-font'><h5>Marketing tools</h5></div>
    </div>   
    
    </>
  )
}

export default Course