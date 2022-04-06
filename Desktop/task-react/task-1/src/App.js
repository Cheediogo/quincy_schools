import './App.css';
import GiftCards from './GiftCards';
import {Row, Col, Container} from 'react-bootstrap';

function App() {
  return (
    <Container className='py-3'>
      <h2 className='text-white text-center'>Gift Cards</h2>
      <Row>
        {GiftCards.map((currency) => (
          <Col sm={12} md={4} className="pt-3 ">
            <div className='card p-3 mb-3 border-0' key={currency.id}>
              <h5 className='card-title fw-bold'>{currency.title}</h5>
              <p className='card-content pt-4'>{currency.currencies.map((curency)=>{
                return <button className='buton py-1 px-2 m-1 border-0 text-white'>{curency}</button>
              })}</p>
            </div>
          </Col>
             ))}
      </Row>
    </Container>
  );
}

export default App;

