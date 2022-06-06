import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Courses from './Database';
import { Link } from "react-router-dom";

 
  
const AllCourses = () => {
  return (
    <Container className='py-3'>
      <Row>
        {Courses.map((Courz) => {
          const { id } = Courz;
            return(
              <Col sm={12} md={6} lg={4} className="pt-3" >
                <Link to={`/course/${id}`} className=" text-decoration-none">
                <div className='card p-3 mb-3 border-0' key={Courz.id}>
                  <h3 className='card-title fw-bold align-self-center mt-4'>{Courz.name}</h3>
                </div>
                </Link>
              </Col>
            )
          }
        )}
      </Row>
    </Container>
  )
}

export default AllCourses