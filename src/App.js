import './App.css';
import Navbar from './Pages/Home/Sections/Navbar/navbar';
import { BrowserRouter as Router, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
