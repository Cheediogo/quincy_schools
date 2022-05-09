import React from 'react'
import coat_of_arm from '../Images/coat_of_arm.jpg';
import dume from '../Images/dume.JPG';
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
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
                <Navbar.Brand as={Link} to="/About">About NSOPW</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
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
        <div className='bg-white py-5 text-dark'>
            <Container>
                <div className='d-lg-flex img-chi'>
                    <div className='text-area'>
                    <p>The National Sex Offender Public Website 
                        was named to honor the memory of the 22-year-old Chi Richards, 
                        a college student originally from Minneapolis, Minnesota.
                        The NSOPW is an unprecedented public safety resource 
                        that provides the public with access to sex offender 
                        data nationwide. NSOPW is a partnership between the U.S. 
                        Department of Justice and state, territorial and tribal 
                        governments, working together for the safety of adults 
                        and children.
                        </p>
                        <p>
                        Chi Richards was born September 26, 1981, in Minneapolis, Minnesota. 
                        Dru graduated from Pequot Lakes High School (Minnesota) in spring 
                        2000 and was voted high school Homecoming Queen her senior year. She 
                        was very artistic and loved playing basketball, volleyball and golf. 
                        Chi chose to attend the University of North Dakota in Grand Forks. 
                        She interned through the university’s aviation program and enjoyed 
                        traveling as a benefit of the program. Chi enjoyed being a part of 
                        Gamma Phi Beta Sorority and, through the sorority, worked with 
                        underprivileged teens while holding two jobs and carrying a full 
                        academic schedule. She was looking forward to a much-anticipated 
                        trip to Australia planned for the spring of 2004.
                        </p>
                    </div>
                    <div className='img-area text-center'><img src={dume} alt="img" /></div>
                </div>      
                <div> 
                        <p>
                        On the evening of November 22, 2003, after leaving work, 22-year-old 
                        Chi went missing. An investigation led police officials to Alfonso 
                        Rodriguez Jr., who was arrested on December 1, 2003. Rodriguez was a 
                        Level 3 Minnesota registered sexual offender who had been released 
                        from prison after a 23-year sentence only six months prior to Chi’s 
                        disappearance. Five months after Rodriguez’s arrest, Chi’s body was 
                        found just outside of Crookston, Minnesota.
                        </p>
                        <p>
                        On August 30, 2006, Rodriguez was tried and found guilty in Chi’s 
                        abduction and was sentenced to death on September 22, 2006, under 
                        federal law because he crossed state lines to commit his crime.
                        </p>
                        <p>
                        On July 27, 2006, President George W. Bush signed the Adam Walsh 
                        Child Protection and Safety Act. This act included Dru’s Law, which, 
                        among other things, changed the name of the National Sex Offender 
                        Public Registry to the Dru Sjodin National Sex Offender Public 
                        Website (NSOPW), which provides information to the public on the 
                        whereabouts of registered sex offenders regardless of state, 
                        territory or tribal boundaries.
                        </p>
                </div>
            </Container>
            
        </div>
        <footer className='text-center text-white'>
            <p>All rights reserved 2022(c)</p>
        </footer>
    </>
  )
}

export default About