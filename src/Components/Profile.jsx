import { Container, Row, Col } from "react-bootstrap";

  
  const Profiles = () => {
    const email = localStorage.getItem('email');
    const photo = localStorage.getItem('photo');
    const user = localStorage.getItem('user');
    return (
      <Container>
        <div className="pt-5">
          <h2 className="fw-bold">Profile  Setting</h2>
          <p>Personal Details</p>
          <div className="py-5">
              <img src={photo?photo : "https://www.allthetests.com/quiz22/picture/pic_1171831236_1.png"} alt="human" />
            </div>
          <Row className=""> 
            <Col sm={12} md={6}>
              Name:{' '}
              <p >
                {user?user : localStorage.getItem('name')}
              </p>
            </Col>
            <Col sm={12} md={6} className="">
              Email: <p >{email?email : ""}</p>
            </Col>
          </Row>
        </div>
      </Container>
    );
  };
  
  export default Profiles;
  