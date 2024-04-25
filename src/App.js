import './App.css';
import Navbar from './Pages//Navbar/Navbar.js';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home.js';
import About from './Pages/About/About.js';
import Contact from './Pages/Contact/Contact.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/" element={<About />}/>
          <Route path="/" element={<Contact />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
