import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Database from './Database';
import { Link } from "react-router-dom";

 
  
const AllCourses = () => {
  return (
    <Container className='py-3'>
      <Row>
        {Database.map((Courses) => {
          // const {intro, branches} = Courses.details
            return(
              <Col sm={12} md={6} lg={4} className="pt-3 text-decoration-none" as={Link} to="/dashboard/course">
                <div className='card p-3 mb-3 border-0' key={Courses.id}>
                  <h3 className='card-title fw-bold align-self-center mt-4'>{Courses.name}</h3>
                </div>
                {/* <div>
                  <p className='card-text'>{intro}{branches}</p>
                </div> */}
              </Col>
            )
          }
        )}
      </Row>
    </Container>
  )
}

export default AllCourses