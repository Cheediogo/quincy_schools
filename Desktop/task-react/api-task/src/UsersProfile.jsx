import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Row, Col, Container} from 'react-bootstrap';

const UsersProfile = () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const [Users, setUsers] = useState(null)

    let Content = null;

    useEffect(() => {
        axios.get(url)
        .then(response => {
            setUsers(response.data)
        })
    
    }, [url])

    if(Users) {
        Content =
            <Container className='py-3'>
                <h2 className='text-white text-center'>Users Profile</h2>
                <Row>
                    {Users.map((User) => {
                        const {street, suite, city, geo:{lat, lng}} = User.address
                        return(
                            <Col sm={12} md={6} lg={4} className="pt-3 ">
                            <div className='card p-3 mb-3 border-0' key={User.id}>
                            <h2 className='card-title fw-bold'>{User.name}</h2>
                            <p className='card-subtitle'>{User.username}</p>
                            <div>
                                <h6 className='fw-bold pt-4'>General Info</h6>
                                <p className='card-content '>Email:<span className='ps-3'>{User.email}</span></p>
                                <p className='card-text'>Address:<span className='ps-3'>{street} {suite} {city}</span></p>
                                <p className='card-text'>geo:<span className='ps-3'>{lat} {lng} </span></p>
                            </div>
                        </div>
                        </Col>
                        )
                    }
                    )}
                </Row>
            </Container>
    }
    
    return(
        <div>
            {Content}
        </div>
    )
}

export default UsersProfile