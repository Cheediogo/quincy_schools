import React from 'react';
import { Container } from "react-bootstrap";
import img from '../Images/img.jpg';

const Profile = () => {
  return (
    <Container>
        <div className='pt-4 px-4'>
            <h5>Profile Setting</h5>
            <p className='text-muted'>Personal Details</p>
        </div>
        <div className='py-5 d-flex justify-content-center'>
            <img src={img} alt="profile" width="200px" height="200px" className=' rounded-circle'/>
        </div>
        <div className="d-flex mx-4 mb-3 gap-3 mt-5">
            <div className="border p-2 big-width">
                <div className='text-muted'>Full Name</div>
                <p>William Joe</p>
            </div>
            <div className="border p-2 small-width">
                <div className='text-muted'>Email Address</div>
                <p>willyjoe@yahoo.com</p>
            </div>
        </div>
        <div className="border mb-3 mx-4 p-2 full-width">
            <div className='text-muted'>Address</div>
            <p>127 Cabadia Chittagong, Bangladesh</p>
        </div>
        <div className="d-flex mb-3 mx-4 gap-3">
            <div className="border big-width p-2">
                <div className='text-muted'>City</div>
                <p>Chittagong</p>
            </div>
            <div className="border small-width p-2">
                <div className='text-muted'>State/Province</div>
                <p>Chittagong</p>
            </div>
        </div>
        <div className="d-flex mb-3 mx-4 gap-3">
            <div className="border big-width p-2">
                <div className='text-muted'>Zipcode</div>
                <p>3200</p>
            </div>
            <div className="border small-width p-2">
                <div className='text-muted'>Country</div>
                <p>Bangladesh</p>
            </div>
        </div>
    </Container>
  )
}

export default Profile