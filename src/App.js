import './App.css';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';
import About from './About';
import Works from './Works';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/About' element={<About />} />
            <Route path='/Works' element={<Works />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
