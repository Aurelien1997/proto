import './App.css';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
        <Routes>
            <Route path="/a" component={<Home />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
