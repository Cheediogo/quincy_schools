import './App.css';
import { Routes, Route} from "react-router-dom";
import LandingPage from './Components/LandingPage';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import AllCourses from './Components/AllCourses';
import Course from './Components/Course';
import DashboardItem from './Screens/DashboardItem';
import SignUp from './Components/SignUp';
import Profile from './Components/Profile';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="quincy_schools" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="dashboard" element={<Dashboard />} >
          <Route path="dash" element={<DashboardItem />} />
          <Route path="courses" element={<AllCourses/>} />
          <Route path="profile" element={<Profile/>} />
          <Route path="course/:id" element={<Course/>} />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
