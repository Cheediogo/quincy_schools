import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/Home';
import { Route, Routes } from "react-router";
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="bgd-color">
      <Routes>
        <Route exact path="/sex-offenders" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
