import { Container, Row, Col } from "react-bootstrap";
import useLogout from '../Components/useLogout';
  
  const Profiles = () => {
    const {user} = useLogout();
    return (
      <Container>
        <div className="pt-5">
          <h2 className="fw-bold">Profile  Setting</h2>
          <p>Personal Details</p>
          <div className="py-5 profile-img">
              <img  src={user?.photoURL? user?.photoURL: "https://www.allthetests.com/quiz22/picture/pic_1171831236_1.png"} alt="human" />
            </div>
          <Row className=""> 
            <Col sm={12} md={6}>
              Name:{' '}
              <p >
                {user?.displayName? user.displayName: localStorage.getItem('name')}
              </p>
            </Col>
            <Col sm={12} md={6} className="">
              Email: <p >{user?.email? user.email : ""}</p>
            </Col>
          </Row>
        </div>
      </Container>
    );
  };
  
  export default Profiles;
  