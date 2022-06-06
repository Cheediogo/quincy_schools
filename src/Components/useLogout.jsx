import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from '../Firebase';

const useLogout = () => {

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
    return {logout}
  };

export default useLogout;