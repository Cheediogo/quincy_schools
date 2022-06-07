import React from 'react';
import skools from '../Images/skools.png';
import x from '../Images/x.svg';
import him_coding from '../Images/him_coding.png';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {  Nav } from "react-bootstrap";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth} from '../Firebase';

const SignUp = () => {

    const navigate = useNavigate();
    const [registerDetails, setRegisterDetails] = useState({
        email: "",
        password:"",
        name:""
      });
    
    const handleRegisterChange = e => {
        const { name, value } = e.target;
        setRegisterDetails(prev => ({ ...prev, [name]: value }));
      };

    const register = async (e) => {
        e.preventDefault();
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerDetails.email,
                registerDetails.password,
                registerDetails.name
            );
            localStorage.setItem('name', registerDetails.name);
            setRegisterDetails({
                name: '',
                email: '',
                password: '',
            });
            console.log(user);
            navigate('/dashboard/dash')
        } catch (error) {
            console.log(error.message);
        }
    };

    
  return (
    <div className='other-bg p-5 vh-100'> 
        <div className='close-icon bg-white pt-2'><img src={x} alt="logo" className=''/></div>     
        <div className='d-md-flex bg-white p-3 login-height'>
                <div className='login-width text-black text-center'>
                    <h4>Student Sign UP</h4>
                    <p className='text-muted'>make sure your account is secure</p>
                    <div className='male-pix d-md-block d-none'><img src={him_coding} alt="male_coding" className='img-fluid'/> </div>
                </div>
                <div className='login-width text-center login-logo'>  
                    <img src={skools} alt="school_logo" className='mb-3 d-md-block d-none'/>   
                    <form className='submit-btn' onSubmit={register}>
                    <div>
                            <label>
                                <input type="text" 
                                className='input mb-3' 
                                name='name' 
                                value={registerDetails.name} 
                                placeholder='Type Your Student Name' 
                                onChange={handleRegisterChange}/>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="text" 
                                className='input mb-3' 
                                name='email' 
                                value={registerDetails.email} 
                                placeholder='Type Your Student Email' 
                                onChange={handleRegisterChange}/>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="password" 
                                className='input' 
                                name='password' 
                                value={registerDetails.password} 
                                placeholder='Type Your Password' 
                                onChange={handleRegisterChange}/>
                            </label>
                        </div>
                        <Nav  className='nav-btn'>
                            <button type='submit'  className=' border-0 rounded-pill text-white other-bg'>Sign Up</button>
                        </Nav>
                        
                    </form>
                </div>
        </div>
    </div>
  )
}

export default SignUp