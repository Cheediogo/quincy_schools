import { Container, Row, Col } from "react-bootstrap";
import Login from "./Login";
  
  const Profiles = () => {
    const { user } = Login();
    console.log(user)
    return (
      <Container>
        <div className="pt-5">
          <h2 className="fw-bold">Profile  Setting</h2>
          <p>Personal Details</p>
          <div className="py-5">
              <img src={user?.photoURL} alt="human" />
            </div>
          <Row className=""> 
            <Col sm={12} md={6}>
              Name:{' '}
              <p >
                {user?.displayName
                  ? user?.displayName
                  : localStorage.getItem('name')}
              </p>
            </Col>
            <Col sm={12} md={6} className="">
              Email: <p fontWeight={600}>{user?.email}</p>
            </Col>
          </Row>
        </div>
      </Container>
    );
  };
  
  export default Profiles;
  