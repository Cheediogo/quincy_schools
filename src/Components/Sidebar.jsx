import React from 'react';
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
    BoxArrowLeft,
    Grid,
    GraphUp,
    Person,
  } from "react-bootstrap-icons";
import skools from '../Images/skools.png';
import useLogout from './useLogout'; 

const Sidebar = () => {
  const {logout} = useLogout();
  return (
    <>
      <div className="menu pb-5 ">
          <div className="text-center pt-5 pb-4">
            <img
              src={skools}
              alt="profile"
            />
          </div>
      
          <Nav defaultActiveKey="" className="flex-column">
              <Nav.Link as={Link} to={"/dashboard/dash"}>
                  <Grid className="me-4" /> Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to={"/dashboard/courses"}>
                <GraphUp className="me-4"  /> Courses
              </Nav.Link>
              <Nav.Link as={Link} to={"/dashboard/profile"}>
                <Person className="me-4" /> Profile
              </Nav.Link>
              <div className="py-5"></div>
              <Nav.Link as={Link} to="/login">
                <div onClick={logout}>
                  <BoxArrowLeft className="me-4" />
                  Logout
                </div>
              </Nav.Link>
               
          </Nav>
      </div>
    </>
  )
}

export default Sidebar