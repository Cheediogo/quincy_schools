import React from 'react';
import skools from '../Images/skools.png';
import x from '../Images/x.svg';
import him_coding from '../Images/him_coding.png';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {  Nav } from "react-bootstrap";
import { signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, provider } from '../Firebase';

const Login = () => {

    const navigate = useNavigate();
    
    const [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password:"",
      });
    
    const handleLoginChange = e => {
        const { name, value } = e.target;
        setLoginDetails(prev => ({ ...prev, [name]: value }));
      };

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginDetails.email,
                loginDetails.password
            );
            setLoginDetails({ email: '', password: '' });
            console.log(user);
            navigate('/dashboard/dash')
        } catch (error) {
            console.log(error.message);
        }
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

    const logout = async () => {
        try {
          await signOut(auth);
          navigate('/login')
        } catch (err) {
          console.log(err.message);
        }
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
                    <form className='submit-btn' onSubmit={login} >
                        <div>
                            <label>
                                <input type="email" 
                                className='input mb-3' 
                                name='email' 
                                value={loginDetails.email} 
                                placeholder='Type Your Email' 
                                onChange={handleLoginChange}/>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="password" 
                                className='input' 
                                name='password' 
                                value={loginDetails.password} 
                                placeholder='Type Your Password' 
                                onChange={handleLoginChange}/>
                            </label>
                            <div className='text-font d-flex pt-1'>
                                <div className='btn-txt1'>Forgot Password?</div>
                                <Link to="/signup" >
                                    <div className='btn-text'>Register</div>
                                </Link>
                            </div>
                        </div>
                        <Nav className='nav-btn'>
                            <button type='submit'  className=' border-0 rounded-pill text-white other-bg'>Login</button>
                        </Nav>
                        <Link to="/" onClick={logout} >
                            <h6>Logout</h6>
                        </Link>
                        
                        {/* <h6>User Logged In: </h6>{auth.currentUser.email} */}
                        <h6>User Logged In: </h6>{user?.email}
                        <div onClick={(e) => SignInwithGoogleFunc(e)} className='text-danger pt-3 fw-bold'>Login with Google</div>
                    </form>
                </div>
        </div>
    </div>
  )
}

export default Login