import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Service from './Component/Service';
import Navbar from './Navbar';
import UserList from './UserList'; // Ensure capitalization
import UserProfile from './UserProfile';

function App() {
  return (
    <div className="App">
      <h1>Navbar, Link, AnchorTag In React</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/user" element={<UserList />} />
          <Route path="/user/:userId" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
