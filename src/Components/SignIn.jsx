
// import React, { useState } from 'react';
//   import { Link } from 'react-router-dom';
//   import { FaEnvelope } from 'react-icons/fa';
//   import { FcGoogle } from 'react-icons/fc';
//   import { BiHide, BiShow } from 'react-icons/bi';
//   import { useUserAuth } from '../UserAuthContext';
//   import skools from '../Images/skools.png';
//   import him_coding from '../Images/him_coding.png';
  
//   const Signin = () => {
//     const {
//       loginDetails,
//       signupSucess,
//       handleLoginChange,
//       loginError,
//       signin,
//       googleSignin,
//     } = useUserAuth();
//     const [show, setShow] = useState();
//     return (
//       <div px={{ base: '6', lg: '20' }} py="10" bg="gray.50" minH="100vh">
//         <h3>Student Login</h3>
//         <p py="2">make sure your account is secure</p>
//         <div columns={[1, 2]} gap="20" alignItems="center">
//           <div textAlign="center" display={['none', 'block']}>
//             <img src={him_coding} alt="backgroundimage" />
//           </div>
//           <div>
//             <div maxW="200px" mx="auto" mb="3">
//               <img src={skools} alt="logo" />
//             </div>
//             <form onSubmit={signin}>
//               <div spacing="5">
//                 {signupSucess && (
//                   <h4 status="success">
//                     Account created successfully, login!
//                   </h4>
//                 )}
//                 <button
//                   onClick={googleSignin}
//                   type="button"
//                   w="full"
//                   display="flex"
//                   gap="5"
//                   size="lg"
//                   variant="outline"
//                   colorScheme="blue"
//                 >
//                   <FcGoogle fontSize="1.5rem" />{' '}
//                   <p fontSize="1rem">Continue with Google</p>
//                 </button>
//                 <p textDecoration="underline">Continue with email</p>
//                 <label>
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     name="email"
//                     value={loginDetails.email}
//                     onChange={handleLoginChange}
//                     variant="flushed"
//                     borderBottomColor="gray.500"
//                   />
//                   <div children={<FaEnvelope color="blue" />} ></div>
//                 </label>
//                 <label>
//                   <input
//                     type={show ? 'text' : 'password'}
//                     variant="flushed"
//                     placeholder="Password"
//                     name="password"
//                     value={loginDetails.password}
//                     onChange={handleLoginChange}
//                     borderBottomColor="gray.500"
//                   />
//                   <div
//                     onClick={setShow.toggle}
//                     cursor="pointer"
//                     children={
//                       show ? <BiShow color="blue" /> : <BiHide color="blue" />
//                     }
//                   ></div>
//                 </label>
//                 {loginError && (
//                   <h4 status="error" alignSelf="start">
//                     {loginError}
//                   </h4>
//                 )}
//                 <div className='d-flex' gap="3">
//                   Don't have an account?
//                   <Link to="/signup">
//                     <p color="blue.600">Sign up</p>
//                   </Link>
//                 </div>
//                 <button type="submit" size="lg" colorScheme="blue" w="full">
//                   Login
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default Signin;