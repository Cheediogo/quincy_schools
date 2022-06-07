import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from '../Firebase';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";

const useLogout = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
      const unsubcribe = onAuthStateChanged(auth, currentUser => {
          
          setUser(currentUser);
          console.log(currentUser.email)
      });
  
      return () => {
        unsubcribe();
      };
    }, []);

    const navigate = useNavigate();
    const logout = async() => {
        try {
            await signOut(auth);
            navigate('/login')
            // localStorage.removeItem('user');
            // localStorage.removeItem('email');
            // localStorage.removeItem('photo');
          } catch (err) {
            console.log(err.message);
          }
    }    
    return {logout, user}
  };

export default useLogout;