import './App.css';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';
import About from './About';
import Works from './Works';
import Solane from './Solane';
import Platon from './Platon';
import Sedal from './Sedal';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/about' element={<About />} />
            <Route path="/works" element={<Works />}>
              <Route path="/works/platon" element={<Platon />} />
              <Route path="/works/sedal" element={<Sedal />} />
              <Route path="/works/solane" element={<Solane />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
