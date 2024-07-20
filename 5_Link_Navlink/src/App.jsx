import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Service from './Component/Service';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
