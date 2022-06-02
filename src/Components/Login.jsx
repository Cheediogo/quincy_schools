import React from 'react';
import skools from '../Images/skools.png';
import x from '../Images/x.svg';
import him_coding from '../Images/him_coding.png';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {  Nav } from "react-bootstrap";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from '../Firebase';
// import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        studentid: "",
        password:"",
      });
    
      const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
      };

      const SignInwithGoogleFunc = (e) => {
          e.preventDefault();
            signInWithPopup(auth, provider)
                .then((res) => {
                    console.log(res);
                    navigate('/dashboard/dash')
                })
                .catch((error) => {
                    console.log(error)
                })
      };
    
  return (
    <div className='other-bg p-5 vh-100'> 
        <div className='close-icon bg-white pt-2'><img src={x} alt="logo" className=''/></div>     
        <div className='d-md-flex bg-white p-3 login-height'>
                <div className='login-width text-black text-center'>
                    <h4>Student Login</h4>
                    <p className='text-muted'>make sure your account is secure</p>
                    <div className='male-pix d-md-block d-none'><img src={him_coding} alt="male_coding" className='img-fluid'/> </div>
                </div>
                <div className='login-width text-center login-logo'>  
                    <img src={skools} alt="school_logo" className='mb-3 d-md-block d-none'/>   
                    <form className='submit-btn'>
                        <div>
                            <label>
                                <input type="text" 
                                className='input mb-3' 
                                name='studentid' 
                                value={values.name} 
                                placeholder='Type Your Student ID Number' 
                                onChange={handleChange}/>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="password" 
                                className='input' 
                                name='password' 
                                value={values.name} 
                                placeholder='Type Your Password' 
                                onChange={handleChange}/>
                            </label>
                            <div className='text-font d-flex pt-1'>
                                <div className='btn-txt1'>Forgot Password?</div>
                                <div className='btn-text'>Register</div>
                            </div>
                        </div>
                        <Nav as={Link} to="/dashboard/dash" className='nav-btn'>
                            <button  type='submit' className=' border-0 rounded-pill text-white other-bg'>Submit</button>
                        </Nav>
                        {/* <div className='text-danger pt-3'><p>OR</p></div> */}
                        <Nav as={Link} to="/dashboard/dash" className='nav-btn'>
                            <button  type='submit' onClick={(e) => SignInwithGoogleFunc(e)} className=' border-0 rounded-pill text-danger other-bg'>Login with Google</button>
                        </Nav>
                    </form>
                </div>
        </div>
    </div>
  )
}

export default Login